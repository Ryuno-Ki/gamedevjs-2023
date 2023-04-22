/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').Player} Player */
/** @typedef {import('../../state/initial').State} State */
/**
 * Renders the scene for new game.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function newGameSceneComponent(targetElement: HTMLElement, state: State): HTMLElement;
export type Scene = import('../scenes/index').Scene;
export type Player = import('../../state/initial').Player;
export type State = import('../../state/initial').State;
