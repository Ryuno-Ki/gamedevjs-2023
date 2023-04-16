import { SET_NICKNAME } from '../../../constants.js'

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.index
 * @property {string} payload.nickname
 */

/**
 * Action creator to set a nickname.
 *
 * @param {number} index
 * @param {string} nickname
 * @returns {Action}
 */
export function setNickname (index, nickname) {
  return {
    type: SET_NICKNAME,
    payload: {
      index,
      nickname
    }
  }
}
