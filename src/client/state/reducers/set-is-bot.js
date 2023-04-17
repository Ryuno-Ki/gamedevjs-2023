/** @typedef {import('../store').State} State */

/**
 * @typedef {object} payload
 * @property {number} payload.index
 * @property {boolean} payload.isBot
 */

/**
 * Sets the isBot flag.
 *
 * @param {State} state
 * @param {payload} payload
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
