import { evaluateTurns, findTurnsPerRound, hasGameFinished } from '../utils.js'

/** @typedef {import('../actions/check-for-gameover').Action} Action */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */

/**
 * Check for gameover condition and moves to the gameover scene if met.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function checkForGameover (state, payload) {
  const { activeWorld, players, worlds } = state
  if (!hasGameFinished(state)) {
    return Object.assign({}, state)
  }

  if (state.activeScene === 'win') {
    return Object.assign({}, state)
  }

  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null

  const turnsPerRound = findTurnsPerRound(state)
  const votesPerRound = evaluateTurns(turnsPerRound, players.length)

  if (votesPerRound.length < /** @type {World!} */(world).solution.length) {
    return Object.assign({}, state, { activeScene: 'gameover' })
  }

  if (
    /** @type {World!} */(world).solution
      .some((emoji, index) => votesPerRound[index] === emoji)
  ) {
    return Object.assign({}, state, { activeScene: 'gameover' })
  }

  return Object.assign({}, state)
}
