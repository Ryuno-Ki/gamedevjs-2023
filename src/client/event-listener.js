import { setNickname } from './state/actions/set-nickname.js'
import { switchToScene } from './state/actions/switch-to-scene.js'
import store from './state/store.js'

/** @typedef {import('./components/scenes/index').Scene} Scene */

/**
 * Registers event listeners via delegation.
 */
export function registerEventListeners () {
  document.body.addEventListener('click', onClick)
  document.body.addEventListener('input', onInput)
}

/**
 * Click event handler.
 *
 * @param {MouseEvent} event
 */
export async function onClick (event) {
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
}

/**
 * Input event handler.
 *
 * @param {Event} event
 */
export async function onInput (event) {
  const { target } = event
  if (!target) {
    return
  }

  switch (/** @type {HTMLElement} */(target).nodeName) {
    case 'INPUT':
      // TODO: Remove preventDefault once I figured out how to test it
      event.preventDefault()
      await handleFormInput(/** @type {HTMLInputElement} */(target))
      break
    default:
      // Do nothing
  }
}

/**
 * Handles form inputs.
 *
 * @private
 * @param {HTMLInputElement} inputElement
 */
async function handleFormInput (inputElement) {
  const { type } = inputElement

  switch (type) {
    case 'text':
      await handleNickname(inputElement)
      break
    default:
      // Do nothing
  }
}

/**
 * Handles nickname input.
 *
 * @private
 * @param {HTMLInputElement} textInputElement
 */
async function handleNickname (textInputElement) {
  const index = parseInt(textInputElement.dataset.index || '-1', 10) || -1
  const nickname = textInputElement.value
  await store.dispatch(setNickname(index, nickname))
}

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
