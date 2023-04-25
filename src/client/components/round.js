import { openmojis } from '../../vendor/openmoji.js'
import { findTurnsPerRound } from '../state/utils.js'

/** @typedef {import('../state/initial').State} State */

/**
 * Build the data structure for el that displays current round information.
 *
 * @param {State} state
 * @returns {Array<*>}
 */
export function buildRound (state) {
  return ['div', [], {}, '', [
    buildRoundText(state),
    buildSelect(state)
  ]]
}

/**
 * Build the text shown for the current round.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildRoundText (state) {
  const { activeRound, players, rounds } = state
  const round = activeRound !== null ? rounds[activeRound] : null

  let playerText = 'Invalid player'
  let roundText = 'Invalid round'

  if (round !== null) {
    const index = round.turns.length
    roundText = `Round ${round.round}`
    playerText = `Player ${players[index].name}`
  }

  return ['span', [], {}, '', [
    ['span', [], {}, roundText],
    ['span', [], {}, ' / '],
    ['span', [], {}, playerText]
  ]]
}

/**
 * Build the data structure for el to display choices for turn.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildSelect (state) {
  return ['select', [], { id: 'player-turn-choice' }, '', buildChildren(state)]
}

/**
 * Build the data structure for el to display options for select.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildChildren (state) {
  return [
    /** @type {Array<*>} */(['option', [], { selected: 'selected', value: '' }, 'Pick'])
  ].concat(buildOptions(state))
}

/**
 * Build the data structure for el to display options without previous.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildOptions (state) {
  const { activeWorld, worlds } = state
  const world = worlds.find((world) => world.id === activeWorld) || null

  /** @type {Array<string>} */
  let options = world !== null
    ? /** @type {Array<string>} */([]).concat(world.solution)
    : /** @type {Array<string>} */([])

  const previousSelections = findPreviousSelections(state)
  options = options.filter((option) => !previousSelections.includes(option))

  options.sort()

  return options.map((option) => buildOption(option))
}

/**
 * Search the played rounds for all previous turns.
 *
 * @private
 * @param {State} state
 * @returns {Array<string>}
 */
function findPreviousSelections (state) {
  const { activeRound, rounds } = state

  const currentTurns = activeRound && rounds[activeRound]
    ? rounds[activeRound].turns
    : []
  const playerIndex = currentTurns.length

  const previousSelections = findTurnsPerRound(state, activeRound).map((turnsPerRound) => turnsPerRound[playerIndex])
  return previousSelections
}

/**
 * Build the data structure for el to display a single option.
 *
 * @private
 * @param {string} option
 * @returns {Array<*>}
 */
function buildOption (option) {
  const emojis = openmojis.find((emoji) => emoji.hexcode === option)
  const display = emojis ? emojis.emoji : 'Invalid'
  return ['option', [], { value: option }, display]
}
