import { nanoid } from 'nanoid'

/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/** @typedef {import('../actions/select-world').Action} Action */

/**
 * Pick a world to play.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function selectWorld (state, payload) {
  let { activeRound, activeScene, activeWorld, rounds } = state

  if (payload.worldId) {
    activeRound = nanoid()
    activeScene = 'level'
    activeWorld = payload.worldId
    rounds = {
      [activeRound]: {
        previousRound: null,
        round: 1,
        turns: []
      }
    }
  }

  return Object.assign({}, state, { activeRound, activeScene, activeWorld, rounds })
}
