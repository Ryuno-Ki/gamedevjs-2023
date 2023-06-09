/**
 * Evaluates each turn to determine the winning vote.
 *
 * @param {Array<Array<string>>} turns
 * @param {number} numberOfPlayers
 * @returns {Array<string>}
 */
export function evaluateTurns(turns: Array<Array<string>>, numberOfPlayers: number): Array<string>;
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
/**
 * Evaluates the state for a finished set of rounds and turns.
 *
 * @param {State} state
 * @returns {boolean}
 */
export function hasGameFinished(state: State): boolean;
export type Scene = import('../components/scenes/index').Scene;
export type State = import('./initial').State;
export type World = import('./initial').World;
