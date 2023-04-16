/** @typedef {import('../store').State} State */

/**
 * @typedef {object} payload
 * @property {number} payload.index
 * @property {string} payload.nickname
 */

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

/**
 * Sets the nickname.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function setNickname (state, payload) {
  const players = state.players.map((player, index) => {
    if (index === payload.index) {
      return {
        ...player,
        nickname: sanitiseNickname(payload.nickname)
      }
    } else {
      return player
    }
  })

  return Object.assign({}, state, { players })
}
