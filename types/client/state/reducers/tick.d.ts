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
export function tick(state: State, payload: payload): State;
export type State = import('../initial').State;
export type payload = {
    time: number;
};
