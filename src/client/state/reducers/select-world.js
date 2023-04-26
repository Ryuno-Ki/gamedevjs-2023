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
  let activeScene = state.activeScene
  let activeWorld = state.activeWorld

  if (payload.worldId) {
    activeScene = 'level'
    activeWorld = payload.worldId
  }

  return Object.assign({}, state, { activeScene, activeWorld })
}
