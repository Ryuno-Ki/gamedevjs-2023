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
    element.innerHTML = 'Settings Scene'
  }

  return element
}
