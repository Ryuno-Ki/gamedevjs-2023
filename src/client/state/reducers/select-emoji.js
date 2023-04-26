import { nanoid } from 'nanoid'

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

  let newId = activeRound
  let rounds = state.rounds

  if (world && activeRound && payload.emoji) {
    rounds = {
      ...state.rounds,
      [activeRound]: {
        ...state.rounds[activeRound],
        turns: state.rounds[activeRound].turns.concat([payload.emoji])
      }
    }

    const currentRound = rounds[activeRound]
    const numberOfPlayers = state.players.length

    if (currentRound.turns.length === numberOfPlayers) {
      newId = nanoid()
      rounds[newId] = {
        previousRound: activeRound,
        round: 1 + currentRound.round,
        turns: []
      }
    }
  }

  return Object.assign({}, state, { activeRound: newId, rounds })
}
