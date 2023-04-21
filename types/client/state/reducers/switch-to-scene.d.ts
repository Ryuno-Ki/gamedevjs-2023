/** @typedef {import('../../components/scenes/index').Scene} Scene */
/** @typedef {import('../actions/switch-to-scene').Action} Action */
/** @typedef {import('../store').State} State */
/**
 * Switches the scene.
 *
 * @param {State} state
 * @param {Action['payload']} payload
 * @returns {State}
 */
export function switchToScene(state: State, payload: Action['payload']): State;
export type Scene = import('../../components/scenes/index').Scene;
export type Action = import('../actions/switch-to-scene').Action;
export type State = import('../store').State;
