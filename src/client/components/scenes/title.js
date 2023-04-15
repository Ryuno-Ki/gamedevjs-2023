import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildTitleScene (state) {
  const container = document.createElement('div')
  const headline = document.createElement('h1')
  headline.textContent = 'Title Scene'

  const transitions = getTransitionsForSceneFromState(state, 'title')
  const anchors = mapTransitionsToLinks(transitions)
  container.appendChild(headline)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for title.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function titleSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'title') {
    element.innerHTML = ''
  } else {
    const child = buildTitleScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
