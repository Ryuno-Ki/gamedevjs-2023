/** @typedef {import('../state/initial').State} State */
/** @typedef {import('./scenes/index').Scene} Scene */
/**
 * Builds the anchors leading from the given scene.
 *
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<*>}
 */
export function buildAnchors(state: State, scene: Scene): Array<any>;
export type State = import('../state/initial').State;
export type Scene = import('./scenes/index').Scene;
