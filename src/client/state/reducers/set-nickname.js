/** @typedef {import('../actions/set-nickname').Action} Action */
/** @typedef {import('../store').State} State */

/**
 * Sets the nickname.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setNickname (state, payload) {
  const players = state.players.map((player, index) => {
    if (index === payload.index) {
      return {
        ...player,
        name: sanitiseNickname(payload.nickname)
      }
    } else {
      return player
    }
  })

  return Object.assign({}, state, { players })
}

/**
 * Sanitise nickname.
 *
 * @private
 * @param {string} unsafeNickname
 * @returns {string}
 */
function sanitiseNickname (unsafeNickname) {
  const safeNickname = unsafeNickname
  // FIXME: Sanitising!
  return safeNickname
}
