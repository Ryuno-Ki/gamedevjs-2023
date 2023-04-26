import { SELECT_WORLD } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {string} payload.worldId
 */

/**
 * Action creator to pick a world for play.
 *
 * @param {string} worldId
 * @returns {Action}
 */
export function selectWorld (worldId) {
  return {
    type: SELECT_WORLD,
    payload: {
      worldId
    }
  }
}
