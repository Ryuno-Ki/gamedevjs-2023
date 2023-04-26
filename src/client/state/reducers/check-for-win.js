import { evaluateTurns, findTurnsPerRound, hasGameFinished } from '../utils.js'

/** @typedef {import('../actions/check-for-win').Action} Action */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */

/**
 * Check for win condition and moves to the win scene if met.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function checkForWin (state, payload) {
  let activeScene = state.activeScene
  const { activeWorld, players, worlds } = state
  if (!hasGameFinished(state)) {
    return Object.assign({}, state, { activeScene })
  }

  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null

  const turnsPerRound = findTurnsPerRound(state)
  const votesPerRound = evaluateTurns(turnsPerRound, players.length)

  if (
    /** @type {World!} */(world).solution
      .every((emoji, index) => votesPerRound[index] === emoji)
  ) {
    activeScene = 'win'
  }

  if (state.activeScene === 'gameover') {
    activeScene = 'gameover'
  }

  return Object.assign({}, state, { activeScene })
}
