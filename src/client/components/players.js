import { buildPlayer } from './player.js'

/** @typedef {import('../state/initial').State} State */

/**
 * Build the data structure for svg that displays the player on the field.
 *
 * @param {State} state
 * @returns {Array<*>}
 */
export function buildPlayers (state) {
  const players = state.players.map((player, index) => {
    return buildPlayer(player, index)
  })

  return ['g', ['players'], {}, '', players]
}
