import { getTransitionsForSceneFromState } from '../utils.js'

/** @typedef {import('../../components/scenes/index').Scene} Scene */
/** @typedef {import('../store').State} State */

/**
 * @typedef {object} payload
 * @property {Scene} payload.scene
 */

/**
 * Switches the scene.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function switchToScene (state, payload) {
  let { activeScene, gameStatus } = state

  const transitions = getTransitionsForSceneFromState(state, activeScene)

  if (transitions.includes(payload.scene)) {
    activeScene = payload.scene
    gameStatus = 'INITIALISED'
  }

  return Object.assign({}, state, { activeScene, gameStatus })
}
