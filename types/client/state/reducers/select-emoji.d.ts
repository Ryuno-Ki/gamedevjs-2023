/** @typedef {import('../store').State} State */
/**
 * @typedef {object} payload
 * @property {string} payload.emoji
 */
/**
 * Picks an emoji as turn of a player in a round.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function selectEmoji(state: State, payload: payload): State;
export type State = import('../store').State;
export type payload = {
    emoji: string;
};
