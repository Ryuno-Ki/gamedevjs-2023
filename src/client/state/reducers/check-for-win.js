import { findTurnsPerRound } from '../utils.js'

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
  const { activeRound, activeWorld, players, rounds, worlds } = state
  if (!activeRound) {
    return Object.assign({}, state, { activeScene })
  }

  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null
  if (!world) {
    return Object.assign({}, state, { activeScene })
  }

  const round = rounds[activeRound]
  if (!round) {
    return Object.assign({}, state, { activeScene })
  }

  if (round.round < world.solution.length) {
    return Object.assign({}, state, { activeScene })
  }

  if (round.turns.length < players.length) {
    return Object.assign({}, state, { activeScene })
  }

  const turnsPerRound = findTurnsPerRound(state, activeRound)
  const votesPerRound = evaluateTurns(turnsPerRound)

  if (world.solution.every((emoji, index) => votesPerRound[index] === emoji)) {
    activeScene = 'win'
  }

  return Object.assign({}, state, { activeScene })
}

/**
 * Evaluates each turn to determine the winning vote.
 *
 * @private
 * @param {Array<Array<string>>} turns
 * @returns {Array<string>}
 */
function evaluateTurns (turns) {
  return turns.map((turnsPerRound) => {
    const counts = new Map()
    turnsPerRound.forEach((turn) => {
      if (counts.has(turn)) {
        counts.set(turn, 1 + counts.get(turn))
      } else {
        counts.set(turn, 1)
      }
    })
    const turnsOrderedByCount = Array.from(counts)
    turnsOrderedByCount.sort((a, b) => b[1] - a[1])

    return turnsOrderedByCount[0][0]
  })
}
