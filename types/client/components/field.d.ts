/** @typedef {import('../state/initial').State} State */
/** @typedef {import('../state/initial').World} World */
/**
 * Build the SVG DOM for the field.
 *
 * @param {State} state
 * @returns {SVGElement}
 */
export function buildField(state: State): SVGElement;
export type State = import('../state/initial').State;
export type World = import('../state/initial').World;
