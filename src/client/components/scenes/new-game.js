/** @typedef {import('../../state/initial').State} State */

/**
 * Renders the scene for new game.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function newGameSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'new-game') {
    element.innerHTML = ''
  } else {
    element.innerHTML = 'New Game Scene'
  }

  return element
}
