/**
 * Traverses the rounds of state to find all turns in them.
 *
 * @param {State} state
 * @returns {Array<Array<string>>}
 */
export function findTurnsPerRound(state: State): Array<Array<string>>;
/**
 * Extracts the transitions from given scene from state.
 *
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<Scene>}
 */
export function getTransitionsForSceneFromState(state: State, scene: Scene): Array<Scene>;
export type Scene = import('../components/scenes/index').Scene;
export type State = import('./initial').State;
