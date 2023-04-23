import { CHECK_FOR_GAMEOVER } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {CHECK_FOR_GAMEOVER} type
 * @property {object} payload
 */

/**
 * Action creator to check for gameover condition.
 *
 * @returns {Action}
 */
export function checkForGameover () {
  return {
    type: CHECK_FOR_GAMEOVER,
    payload: {}
  }
}
