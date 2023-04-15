/** @typedef {import('../../state/initial').State} State */
/**
 * Renders the scene for level.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function levelSceneComponent(targetElement: HTMLElement, state: State): HTMLElement;
export type State = import('../../state/initial').State;