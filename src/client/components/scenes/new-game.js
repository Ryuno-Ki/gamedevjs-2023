import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { el } from '../el.js'
import { mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').Player} Player */
/** @typedef {import('../../state/initial').State} State */

/**
 * Renders the scene for new game.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function newGameSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'new-game') {
    element.innerHTML = ''
  } else {
    const child = buildScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  const headline = ['h1', [], {}, 'New Game Scene']
  const transitions = getTransitionsForSceneFromState(state, 'level')
  const anchors = mapTransitionsToLinks(transitions)
  const fieldsets = mapPlayersToFieldsets(state.players)

  return /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    headline,
    ['div', ['actions'], {}, '', anchors],
    ...fieldsets
  ]))
}

/**
 * Builds the DOM for all players.
 *
 * @private
 * @param {Array<Player>} players
 * @returns {Array<*>}
 */
function mapPlayersToFieldsets (players) {
  return players.map((player, index) => mapPlayerToFieldset(player, index))
}

/**
 * Builds the DOM for a single player.
 *
 * @private
 * @param {Player} player
 * @param {number} index
 * @returns {*}
 */
function mapPlayerToFieldset (player, index) {
  const idBot = `player-${index + 1}-bot`
  const idName = `player-${index + 1}-name`

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, `Player ${index + 1}`],
    ['div', [], {}, '', [
      ['label', [], { for: idName }, 'Nickname'],
      ['input', [], { id: idName, 'data-index': index, type: 'text' }]
    ]],
    ['div', [], {}, '', [
      ['p', [], {}, 'Is Bot?'],
      ['label', [], { for: `${idBot}-yes` }, 'Yes'],
      ['input', [], {
        checked: player.isBot ? 'checked' : '',
        'data-index': index,
        id: `${idBot}-yes`,
        name: idBot,
        type: 'radio',
        value: true
      }],
      ['label', [], { for: `${idBot}-no` }, 'No'],
      ['input', [], {
        checked: !player.isBot ? 'checked' : '',
        'data-index': index,
        id: `${idBot}-no`,
        name: idBot,
        type: 'radio',
        value: false
      }]
    ]]
  ]]
}
