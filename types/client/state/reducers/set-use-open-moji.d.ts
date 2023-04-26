/** @typedef {import('../actions/set-use-open-moji').Action} Action */
/** @typedef {import('../store').State} State */
/**
 * Sets the useOpenMoji flag.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setUseOpenMoji(state: State, payload: Action['payload']): State;
export type Action = import('../actions/set-use-open-moji').Action;
export type State = import('../store').State;
