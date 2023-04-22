import { buildAnchors } from '../anchors.js'
import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */

/**
 * Renders the scene for settings.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function settingsSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'settings') {
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
    buildHeadline('Settings'),
    buildAnchors(state, 'settings')
  ]))
}
