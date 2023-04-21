/** @typedef {import('../actions/set-nickname').Action} Action */
/** @typedef {import('../store').State} State */
/**
 * Sets the nickname.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setNickname(state: State, payload: Action['payload']): State;
export type Action = import('../actions/set-nickname').Action;
export type State = import('../store').State;
