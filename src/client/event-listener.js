import { switchToScene } from './state/actions/switch-to-scene.js'
import store from './state/store.js'

/** @typedef {import('./components/scenes/index').Scene} Scene */

/**
 * Handle link clicks by transition to a new scene
 *
 * @private
 * @param {HTMLAnchorElement} anchorElement
 */
async function handleLinkClick (anchorElement) {
  const href = anchorElement.getAttribute('href')
  if (href) {
    const scene = /** @type {Scene} */(href.slice(1))
    await store.dispatch(switchToScene(scene))
  }
}

/**
 * Registers event listeners via delegation.
 */
export function registerEventListeners () {
  document.body.addEventListener('click', async (event) => {
    const { target } = event
    if (!target) {
      return
    }

    switch (/** @type {HTMLElement} */(target).nodeName) {
      case 'A':
        // TODO: Remove preventDefault once I figured out how to test it
        event.preventDefault()
        await handleLinkClick(/** @type {HTMLAnchorElement} */(target))
        break
      default:
        // Do nothing
    }
  })
}
