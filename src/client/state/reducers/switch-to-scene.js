import { nanoid } from 'nanoid'

import { getTransitionsForSceneFromState } from '../utils.js'

/** @typedef {import('../../components/scenes/index').Scene} Scene */
/** @typedef {import('../actions/switch-to-scene').Action} Action */
/** @typedef {import('../store').State} State */

/**
 * Switches the scene.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function switchToScene (state, payload) {
  let { activeRound, activeScene, gameStatus, rounds } = state

  const transitions = getTransitionsForSceneFromState(state, activeScene)

  if (payload.scene === 'level' && activeScene === 'new-game') {
    const id = nanoid()
    activeRound = id
    rounds = {
      [id]: {
        previousRound: null,
        round: 1,
        turns: []
      }
    }
  }

  if (transitions.includes(payload.scene)) {
    activeScene = payload.scene
    gameStatus = 'INITIALISED'
  }

  return Object.assign(
    {},
    state,
    { activeRound, activeScene, gameStatus, rounds }
  )
}
