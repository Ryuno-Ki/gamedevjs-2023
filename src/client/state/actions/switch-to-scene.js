import { SWITCH_TO_SCENE } from '../../../constants.js'

/** @typedef {import('../../components/scenes/index').Scene} Scene */

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {Scene} payload.scene
 */

/**
 * Action creator to switch a scene.
 *
 * @param {Scene} scene
 * @returns {Action}
 */
export function switchToScene (scene) {
  return {
    type: SWITCH_TO_SCENE,
    payload: {
      scene
    }
  }
}
