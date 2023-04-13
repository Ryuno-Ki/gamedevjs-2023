/** @typedef {import('../../state/initial').State} State */

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
    element.innerHTML = 'Title Scene'
  }

  return element
}
