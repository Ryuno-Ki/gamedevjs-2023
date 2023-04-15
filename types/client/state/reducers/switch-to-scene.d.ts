/** @typedef {import('../../components/scenes/index').Scene} Scene */
/** @typedef {import('../store').State} State */
/**
 * @typedef {object} payload
 * @property {Scene} payload.scene
 */
/**
 * Switches the scene.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function switchToScene(state: State, payload: payload): State;
export type Scene = import('../../components/scenes/index').Scene;
export type State = import('../store').State;
export type payload = {
    scene: Scene;
};
