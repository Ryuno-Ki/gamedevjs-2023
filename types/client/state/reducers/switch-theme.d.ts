/** @typedef {import('../actions/switch-theme').Action} Action */
/** @typedef {import('../store').State} State */
/**
 * Switches the theme.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function switchTheme(state: State, payload: Action['payload']): State;
export type Action = import('../actions/switch-theme').Action;
export type State = import('../store').State;
