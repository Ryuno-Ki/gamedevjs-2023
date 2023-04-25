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
  let activeScene = state.activeScene
  const { activeRound, activeWorld, rounds, worlds } = state
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

  if (round.round !== world.solution.length) {
    return Object.assign({}, state, { activeScene })
  }

  const turnsPerRound = findTurnsPerRound(state, activeRound)
  const votesPerRound = evaluateTurns(turnsPerRound)

  if (world.solution.some((emoji, index) => votesPerRound[index] === emoji)) {
    activeScene = 'gameover'
  }

  return Object.assign({}, state, { activeScene })
}

/**
 * Traverses the rounds of state to find all turns in them.
 *
 * @private
 * @param {State} state
 * @param {State['activeRound']} activeRound
 */
function findTurnsPerRound (state, activeRound) {
  const { players, rounds } = state
  const turns = []

  let id = activeRound
  // This is just a safety net. I don't expect to hit ten iterations.
  let i = 0
  while (i < 10) {
    if (id === null) {
      break
    }

    const round = rounds[id]
    if (!round) {
      break
    }

    turns.unshift(round.turns)
    id = round.previousRound
    i++
  }

  return turns.slice(0, players.length)
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
