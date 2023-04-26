/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */
/**
 * Renders the scene for world selection.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function worldSceneComponent(targetElement: HTMLElement, state: State): HTMLElement;
export type State = import('../../state/initial').State;
export type World = import('../../state/initial').World;
