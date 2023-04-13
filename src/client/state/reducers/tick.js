/** @typedef {import('../initial').State} State */

/**
 * @typedef {object} payload
 * @property {number} payload.time
 */

/**
 * Adds another UNIX timestamp to state.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function tick (state, payload) {
  let clock = /** @type {Array<number>} */([]).concat(state.clock)

  if (state.gameStatus === 'RUNNING') {
    clock = clock.concat(payload.time)
  }

  return Object.assign({}, state, { clock })
}
