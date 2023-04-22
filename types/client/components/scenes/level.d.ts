/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */
/**
 * Renders the scene for level.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function levelSceneComponent(targetElement: HTMLElement, state: State): HTMLElement;
export type Scene = import('../scenes/index').Scene;
export type State = import('../../state/initial').State;
export type World = import('../../state/initial').World;
