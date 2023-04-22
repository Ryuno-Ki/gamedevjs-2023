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
 * @returns {Array<*>}
 */
export function mapTransitionsToLinks(transitions: Array<Scene>): Array<any>;
export type Scene = import('../scenes/index').Scene;
