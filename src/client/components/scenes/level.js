/** @typedef {import('../../state/initial').State} State */

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
    element.innerHTML = 'Level Scene'
  }

  return element
}
