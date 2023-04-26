import { getLogger } from '../../logger.js'

/** @typedef {import('../components/scenes/index').Scene} Scene */
/** @typedef {import('./initial').State} State */
/** @typedef {import('./initial').World} World */

const logger = getLogger('utils')

/**
 * Traverses the rounds of state to find all turns in them.
 *
 * @param {State} state
 * @returns {Array<Array<string>>}
 */
export function findTurnsPerRound (state) {
  const { players, rounds } = state
  const turns = []

  let id = state.activeRound
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
 * Extracts the transitions from given scene from state.
 *
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<Scene>}
 */
export function getTransitionsForSceneFromState (state, scene) {
  const { scenes: { states } } = state
  const sceneState = states[scene]

  if (!sceneState) {
    logger.info('Expected scene but found none', scene)
    return []
  }

  const transitionEvents = sceneState ? sceneState.on : []
  if (!transitionEvents) {
    logger.info('Expected transitions from scene but found none')
    return []
  }

  const transitions = Object
    .values(transitionEvents)
    .map((event) => event.target)

  return transitions
}

/**
 * Evaluates the state for a finished set of rounds and turns.
 *
 * @param {State} state
 * @returns {boolean}
 */
export function hasGameFinished (state) {
  const { activeRound, activeWorld, players, rounds, worlds } = state

  if (!activeRound) {
    return false
  }

  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null

  if (!world) {
    return false
  }

  const round = rounds[activeRound]
  if (!round) {
    return false
  }

  if (round.round < world.solution.length) {
    return false
  }

  if (round.turns.length < players.length) {
    return false
  }

  return true
}
