import { SWITCH_THEME } from '../../../constants.js'

/** @typedef {import('../initial').Theme} Theme */

/**
 * @typedef {object} Action
 * @property {SWITCH_THEME} type
 * @property {object} payload
 * @property {Theme} payload.theme
 */

/**
 * Action creator to switch the UI theme.
 *
 * @param {Theme} theme
 * @returns {Action}
 */
export function switchTheme (theme) {
  return {
    type: SWITCH_THEME,
    payload: {
      theme
    }
  }
}
