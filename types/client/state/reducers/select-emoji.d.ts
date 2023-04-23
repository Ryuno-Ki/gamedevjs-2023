/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/** @typedef {import('../actions/select-emoji').Action} Action */
/**
 * Picks an emoji as turn of a player in a round.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function selectEmoji(state: State, payload: Action['payload']): State;
export type State = import('../initial').State;
export type World = import('../initial').World;
export type Action = import('../actions/select-emoji').Action;
