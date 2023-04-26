/** @typedef {import('../actions/set-use-open-moji').Action} Action */
/** @typedef {import('../store').State} State */

/**
 * Sets the useOpenMoji flag.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setUseOpenMoji (state, payload) {
  const { useOpenMoji } = payload

  return Object.assign({}, state, { useOpenMoji })
}
