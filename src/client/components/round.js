import { openmojis } from '../../vendor/openmoji.js'

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
  const { activeWorld, worlds } = state
  const world = worlds.find((world) => world.id === activeWorld) || null

  /** @type {Array<string>} */
  const options = world !== null
    ? /** @type {Array<string>} */([]).concat(world.solution)
    : /** @type {Array<string>} */([])
  options.sort()

  const children = [
    /** @type {*} */(['option', [], { selected: 'selected', value: '' }, 'Pick'])
  ].concat(
    options.map((option) => {
      const emojis = openmojis.find((emoji) => emoji.hexcode === option)
      const display = emojis ? emojis.emoji : 'Invalid'
      return ['option', [], { value: option }, display]
    })
  )

  return ['select', [], { id: 'player-turn-choice' }, '', children]
}
