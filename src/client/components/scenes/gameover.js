import { openmojis } from '../../../vendor/openmoji.js'
import { findTurnsPerRound } from '../../state/utils.js'
import { buildAnchors } from '../anchors.js'
import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */

/**
 * Renders the scene for gameover.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function gameoverSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'gameover') {
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
  return /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    buildHeadline('Game Over'),
    buildEvaluation(state),
    buildAnchors(state, 'gameover')
  ]))
}

/**
 * Evaluates the play and compares it with the solution.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildEvaluation (state) {
  const { activeWorld, players, worlds } = state

  const turnsPerRound = findTurnsPerRound(state)
  const play = turnsPerRound.map((round) => {
    const children = round.map((turn, index) => {
      const player = players[index]
      const emojis = openmojis.find((emoji) => emoji.hexcode === turn)
      const emoji = emojis ? emojis.emoji : 'Invalid'

      const playerTurn = ['li', [], {}, '', [
        ['span', [], {}, player.name],
        ['span', [], {}, ' played '],
        ['span', ['emoji'], {}, emoji]
      ]]
      return ['ol', [], {}, '', [playerTurn]]
    })

    return ['li', [], {}, 'Round', children]
  })

  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null
  const solution = world !== null
    ? world.solution.map((item) => {
      const emojis = openmojis.find((emoji) => emoji.hexcode === item)
      return emojis ? emojis.emoji : 'Invalid'
    }).join(' ')
    : 'Invalid'

  return ['div', [], {}, solution, [[
    'ol', [], {}, '', play
  ]]]
}
