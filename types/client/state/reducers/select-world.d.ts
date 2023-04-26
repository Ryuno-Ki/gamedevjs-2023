/** @typedef {import('../initial').State} State */
/** @typedef {import('../initial').World} World */
/** @typedef {import('../actions/select-world').Action} Action */
/**
 * Pick a world to play.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function selectWorld(state: State, payload: Action['payload']): State;
export type State = import('../initial').State;
export type World = import('../initial').World;
export type Action = import('../actions/select-world').Action;
