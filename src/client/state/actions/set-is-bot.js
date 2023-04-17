import { SET_IS_BOT } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.index
 * @property {boolean} payload.isBot
 */

/**
 * Action creator to declare a player to be a bot.
 *
 * @param {number} index
 * @param {boolean} isBot
 * @returns {Action}
 */
export function setIsBot (index, isBot) {
  return {
    type: SET_IS_BOT,
    payload: {
      index,
      isBot
    }
  }
}
