/** @typedef {import('../../state/initial').State} State */

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
    element.innerHTML = 'About Scene'
  }

  return element
}
