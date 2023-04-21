import { SELECT_EMOJI } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {string} payload.emoji
 */

/**
 * Action creator to pick an emoji as a turn in a round.
 *
 * @param {string} emoji
 * @returns {Action}
 */
export function selectEmoji (emoji) {
  return {
    type: SELECT_EMOJI,
    payload: {
      emoji
    }
  }
}
