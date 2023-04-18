/** @typedef {import('../scenes/index').Scene} Scene */
/**
 * Calculates the radians angle to a given degree.
 *
 * @param {number} degree
 * @returns {number}
 */
export function mapDegToRadians(degree: number): number;
/**
 * Turns transitions into anchor elements.
 *
 * @param {Array<Scene>} transitions
 * @returns {Array<HTMLAnchorElement>}
 */
export function mapTransitionsToLinks(transitions: Array<Scene>): Array<HTMLAnchorElement>;
export type Scene = import('../scenes/index').Scene;
