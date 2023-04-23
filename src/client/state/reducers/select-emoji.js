/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/** @typedef {import('../actions/select-emoji').Action} Action */

/**
 * Picks an emoji as turn of a player in a round.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function selectEmoji (state, payload) {
  const { activeRound, activeWorld, worlds } = state
  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null

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

  // TODO: Increase round once turns.length === players.length

  return Object.assign({}, state, { rounds })
}
