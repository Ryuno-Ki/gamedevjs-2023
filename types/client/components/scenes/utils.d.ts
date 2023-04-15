/** @typedef {import('../scenes/index').Scene} Scene */
/**
 * Turns transitions into anchor elements.
 *
 * @private
 * @param {Array<Scene>} transitions
 * @returns {Array<HTMLAnchorElement>}
 */
export function mapTransitionsToLinks(transitions: Array<Scene>): Array<HTMLAnchorElement>;
export type Scene = import('../scenes/index').Scene;
