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
  const activeWorld = payload.worldId ? payload.worldId : state.activeWorld

  return Object.assign({}, state, { activeWorld })
}
