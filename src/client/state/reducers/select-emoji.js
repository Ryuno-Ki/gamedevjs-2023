/** @typedef {import('../store').State} State */

/**
 * @typedef {object} payload
 * @property {string} payload.emoji
 */

/**
 * Picks an emoji as turn of a player in a round.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function selectEmoji (state, payload) {
  const { activeRound, activeWorld, worlds } = state
  const world = worlds.find((world) => world.id === activeWorld) || null

  let rounds = state.rounds
  if (world && activeRound) {
    rounds = {
      ...state.rounds,
      [activeRound]: {
        ...state.rounds[activeRound],
        turns: state.rounds[activeRound].turns.concat([payload.emoji])
      }
    }
  }

  return Object.assign({}, state, { rounds })
}
