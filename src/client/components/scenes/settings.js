import { buildAnchors } from '../anchors.js'
import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').Theme} Theme */

/**
 * @typedef {object} ThemeOption
 * @property {Theme} ThemeOption.value
 * @property {'selected'} [ThemeOption.selected]
 */

/**
 * @typedef {object} EmojiOption
 * @property {string} EmojiOption.id
 * @property {'checkbox'} EmojiOption.type
 * @property {'checked'} [EmojiOption.checked]
 */

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
    buildThemeSwitcher(state),
    buildEmojiSwitcher(state),
    buildAnchors(state, 'settings')
  ]))
}

/**
 * Build the DOM to allow switching of theme.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildThemeSwitcher (state) {
  const { theme } = state
  const themeId = 'settings-theme'
  const system = /** @type {ThemeOption} */({ value: 'system' })
  const dark = /** @type {ThemeOption} */({ value: 'dark' })
  const light = /** @type {ThemeOption} */({ value: 'light' })

  switch (theme) {
    case 'system':
      system.selected = 'selected'
      break
    case 'dark':
      dark.selected = 'selected'
      break
    case 'light':
      light.selected = 'selected'
      break
    default:
      // Do nothing
  }

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, 'Interface'],
    ['label', [], { for: themeId }, 'Select theme'],
    ['select', [], { id: themeId }, '', [
      ['option', [], system, 'System'],
      ['option', [], dark, 'Dark'],
      ['option', [], light, 'Light']
    ]]
  ]]
}

/**
 * Build the DOM to allow switching off OpenMoji emojis.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildEmojiSwitcher (state) {
  const emojiId = 'settings-emoji'

  const { useOpenMoji } = state
  /** @type {EmojiOption} */
  const attributes = { id: emojiId, type: 'checkbox' }
  if (useOpenMoji) {
    attributes.checked = 'checked'
  }

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, 'Emoji'],
    ['label', [], { for: emojiId }, 'Use OpenMoji emojis?'],
    ['input', [], attributes]
  ]]
}
