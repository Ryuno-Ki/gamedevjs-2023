/** @typedef {import('../actions/check-for-gameover').Action} Action */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/**
 * Check for gameover condition and moves to the gameover scene if met.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function checkForGameover(state: State, payload: Action['payload']): State;
export type Action = import('../actions/check-for-gameover').Action;
export type State = import('../initial').State;
export type World = import('../initial').World;
