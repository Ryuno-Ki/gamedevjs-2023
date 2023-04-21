/** @typedef {import('../actions/tick').Action} Action */
/** @typedef {import('../initial').State} State */
/**
 * Adds another UNIX timestamp to state.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function tick(state: State, payload: Action['payload']): State;
export type Action = import('../actions/tick').Action;
export type State = import('../initial').State;
