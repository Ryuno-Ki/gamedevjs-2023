/** @typedef {import('../store').State} State */
/**
 * @typedef {object} payload
 * @property {number} payload.index
 * @property {boolean} payload.isBot
 */
/**
 * Sets the isBot flag.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function setIsBot(state: State, payload: payload): State;
export type State = import('../store').State;
export type payload = {
    index: number;
    isBot: boolean;
};
