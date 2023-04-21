/** @typedef {import('../actions/set-is-bot').Action} Action */
/** @typedef {import('../store').State} State */

/**
 * Sets the isBot flag.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setIsBot (state, payload) {
  const players = state.players.map((player, index) => {
    if (index === payload.index) {
      return {
        ...player,
        isBot: payload.isBot
      }
    } else {
      return player
    }
  })

  return Object.assign({}, state, { players })
}
