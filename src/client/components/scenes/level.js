import { openmojis } from '../../../vendor/openmoji.js'
import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { el } from '../el.js'
import { mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */

/**
 * Build the DOM to place the players on the UI.
 *
 * @private
 * @param {State} state
 * @returns HTMLDivElement
 */
function layoutPlayers (state) {
  const emojis = openmojis.find((emoji) => emoji.hexcode === '1F916')
  const robot = emojis ? emojis.emoji : ''
  const players = state.players.map((player, index) => {
    return [
      'div',
      ['player'],
      { 'data-index': index },
      '',
      [
        ['div', ['avatar'], {}, robot],
        ['span', ['nickname'], {}, player.name]
      ]
    ]
  })

  const container = /** @type {HTMLDivElement} */(el(
    'div',
    ['players'],
    {},
    '',
    players
  ))
  return container
}

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  const container = /** @type {HTMLDivElement} */(el('div'))
  container.appendChild(layoutPlayers(state))

  const transitions = getTransitionsForSceneFromState(state, 'level')
  const anchors = mapTransitionsToLinks(transitions)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for level.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function levelSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'level') {
    element.innerHTML = ''
  } else {
    const child = buildScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
