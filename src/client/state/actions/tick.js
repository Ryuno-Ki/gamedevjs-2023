import { TICK } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.time
 */

/**
 * Action creator for progressing internal clock.
 *
 * @param {number} time
 * @returns {Action}
 */
export function tick (time) {
  return {
    type: TICK,
    payload: {
      time
    }
  }
}
