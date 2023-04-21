/** @typedef {import('../initial').Round} Round */
/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
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
export type Round = import('../initial').Round;
export type State = import('../initial').State;
export type World = import('../initial').World;
export type payload = {
    emoji: string;
};
