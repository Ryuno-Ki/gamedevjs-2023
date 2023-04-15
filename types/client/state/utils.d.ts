/** @typedef {import('../components/scenes/index').Scene} Scene */
/** @typedef {import('./initial').State} State */
/**
 * Extracts the transitions from given scene from state.
 *
 * @private
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<Scene>}
 */
export function getTransitionsForSceneFromState(state: State, scene: Scene): Array<Scene>;
export type Scene = import('../components/scenes/index').Scene;
export type State = import('./initial').State;
