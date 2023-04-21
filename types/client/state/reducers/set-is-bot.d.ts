/** @typedef {import('../actions/set-is-bot').Action} Action */
/** @typedef {import('../store').State} State */
/**
 * Sets the isBot flag.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function setIsBot(state: State, payload: Action['payload']): State;
export type Action = import('../actions/set-is-bot').Action;
export type State = import('../store').State;
