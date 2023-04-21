/** @typedef {import('../initial').Round} Round */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */

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

  let activeScene = state.activeScene
  activeScene = checkForWin(state, rounds)
  activeScene = checkForGameover(state, rounds)
  // TODO: Increase round once turns.length === players.length

  return Object.assign({}, state, { activeScene, rounds })
}

/**
 * Checks whether conditions for a win are met.
 *
 * @private
 * @param {State} state
 * @param {State['rounds']} rounds
 * @returns {State['activeScene']}
 */
function checkForWin (state, rounds) {
  let activeScene = state.activeScene
  const { activeRound, activeWorld, worlds } = state
  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null

  if (!world) {
    return activeScene
  }

  if (!activeRound) {
    return activeScene
  }

  const round = rounds[activeRound]
  if (!round) {
    return activeScene
  }

  const vote = evaluateTurn(world.solution, round.turns)
    // voting is an array of emoji and numberOfVotes
    // since I know that there will be three players, a majority is 2
    // and univocally voting is 3. Both are > 1.
    .filter((voting) => /** @type {number!} */(voting[1]) > 1)
    // TODO: I want to return the emoji with the highest count here
    // .reduce((candidate, voting) => /** @type {string!} */(voting[0]))

  if (vote.length === 0) {
    return activeScene
  }

  // TODO: Evaluate over four rounds, because solution.length === 4
  if (world.solution.includes(/** @type {string} */(vote[0][0]))) {
    activeScene = 'win'
  }

  return activeScene
}

/**
 * Checks whether conditions for a gameover are met.
 *
 * @private
 * @param {State} state
 * @param {State['rounds']} rounds
 * @returns {State['activeScene']}
 */
function checkForGameover (state, rounds) {
  let activeScene = state.activeScene
  const { activeRound, activeWorld, worlds } = state
  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null
  if (!world) {
    return activeScene
  }

  if (!activeRound) {
    return activeScene
  }

  const round = rounds[activeRound]
  if (!round) {
    return activeScene
  }

  const vote = evaluateTurn(world.solution, round.turns)
    // voting is an array of emoji and numberOfVotes
    // since I know that there will be three players, a majority is 2
    // and univocally voting is 3. Both are > 1.
    .filter((voting) => /** @type {number!} */(voting[1]) > 1)
    // TODO: I want to return the emoji with the highest count here
    // .reduce((candidate, voting) => /** @type {string!} */(voting[0]))

  if (vote.length === 0) {
    return activeScene
  }

  // TODO: Evaluate over four rounds, because solution.length === 4
  // Also consider ties to be null.
  // Also take into account having reached all rounds without meeting a win condition
  // In that regard, checking the maximum number of rounds might be sufficient.
  if (world.solution.includes(/** @type {string} */(vote[0][0]))) {
    activeScene = 'gameover'
  }

  return activeScene
}

/**
 * Counts the occurences of each potential successful emoji.
 *
 * @private
 * @param {World['solution']} solution
 * @param {Round['turns']} turns
 * @returns {Array<Array<string | number>>}
 */
function evaluateTurn (solution, turns) {
  const vote = new Map()
  solution.forEach((/** @type {string} */emoji) => {
    vote.set(emoji, turns.filter((/** @type {string} */e) => e === emoji).length)
  })
  return Array.from(vote)
}
