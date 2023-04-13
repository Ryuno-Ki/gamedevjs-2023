import { applyToDOM } from './apply-to-dom.js'
import { APP_SELECTOR } from '../constants.js'
import * as componentRegistry from './registry.js'
import { tick } from './state/actions/tick.js'
import store from './state/store.js'

function error () {
  document.body.innerHTML = 'Could not start app!'
}

function step () {
  const main = document.querySelector(APP_SELECTOR)

  if (!main) {
    error()
  }

  const newMain = componentRegistry.render(
    /** @type {HTMLElement!} */(main),
    store.getState()
  )
  applyToDOM(document.body, /** @type {HTMLElement!} */(main), newMain)
  store.dispatch(tick((new Date()).valueOf()))

  // This flag is used in tests only to avoid reaching maximum call stack size
  if (!render._runOnlyOnce) {
    requestAnimationFrame(step)
  }
}

/**
 * Updates the UI on every animation frame.
 */
export async function render () {
  if (render._runOnlyOnce) {
    return step()
  }

  return requestAnimationFrame(step)
}

// This flag is used in tests only to avoid reaching maximum call stack size
render._runOnlyOnce = false
