import { SET_USE_OPEN_MOJI } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {boolean} payload.useOpenMoji
 */

/**
 * Action creator to turn on and off the display of OpenMoji emojis.
 *
 * @param {boolean} useOpenMoji
 * @returns {Action}
 */
export function setUseOpenMoji (useOpenMoji) {
  return {
    type: SET_USE_OPEN_MOJI,
    payload: {
      useOpenMoji
    }
  }
}
