/** @typedef {import('../actions/switch-theme').Action} Action */
/** @typedef {import('../store').State} State */

/**
 * Switches the theme.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function switchTheme (state, payload) {
  const { theme } = payload
  return Object.assign({}, state, { theme })
}
