import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { el } from '../el.js'
import { mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */

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
  const transitions = getTransitionsForSceneFromState(state, 'gameover')
  const anchors = mapTransitionsToLinks(transitions)

  return /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    ['h1', [], {}, 'Gameover Scene'],
    ...anchors
  ]))
}
