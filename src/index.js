import { aboutSceneComponent } from './client/components/scenes/about.js'
import { levelSceneComponent } from './client/components/scenes/level.js'
import { newGameSceneComponent } from './client/components/scenes/new-game.js'
import { settingsSceneComponent } from './client/components/scenes/settings.js'
import { titleSceneComponent } from './client/components/scenes/title.js'
import { add } from './client/registry.js'
import { render } from './client/render.js'
import { switchToScene } from './client/state/actions/switch-to-scene.js'
import store from './client/state/store.js'

/** @typedef {import('./client/components/scenes/index').Scene} Scene */

add('about-scene', aboutSceneComponent)
add('level-scene', levelSceneComponent)
add('new-game-scene', newGameSceneComponent)
add('settings-scene', settingsSceneComponent)
add('title-scene', titleSceneComponent)

render()

document.body.addEventListener('click', async (event) => {
  const { target } = event
  if (!target) {
    return
  }

  switch (/** @type {HTMLElement} */(target).nodeName) {
    case 'A':
      await handleLinkClick(/** @type {HTMLAnchorElement} */(target))
      break
    default:
      // Do nothing
  }
})

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
