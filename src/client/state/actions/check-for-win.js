import { CHECK_FOR_WIN } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {CHECK_FOR_WIN} type
 * @property {object} payload
 */

/**
 * Action creator to check for win condition.
 *
 * @returns {Action}
 */
export function checkForWin () {
  return {
    type: CHECK_FOR_WIN,
    payload: {}
  }
}
