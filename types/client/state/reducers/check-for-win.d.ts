/** @typedef {import('../actions/check-for-win').Action} Action */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/**
 * Check for win condition and moves to the win scene if met.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function checkForWin(state: State, payload: Action['payload']): State;
export type Action = import('../actions/check-for-win').Action;
export type State = import('../initial').State;
export type World = import('../initial').World;
