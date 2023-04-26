import { buildAnchors } from '../anchors.js'
import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */

/**
 * Renders the scene for world selection.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function worldSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'world') {
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
    buildHeadline('Overworld'),
    buildAnchors(state, 'world')
  ]))
}
