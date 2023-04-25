/** @typedef {import('../state/initial').World} World */
/**
 * Build the data structure for svg that displays the left field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildLeftFields(world: World): Array<any>;
/**
 * Compute the points for the left field faces.
 *
 * @param {World} world
 * @returns {Array<Array<Array<number>>>}
 */
export function computeLeftFieldPoints(world: World): Array<Array<Array<number>>>;
export type World = import('../state/initial').World;
