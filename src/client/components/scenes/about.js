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
  headline.textContent = 'About Scene'

  const transitions = getTransitionsForSceneFromState(state, 'about')
  const anchors = mapTransitionsToLinks(transitions)
  container.appendChild(headline)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for about.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function aboutSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'about') {
    element.innerHTML = ''
  } else {
    const child = buildTitleScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
