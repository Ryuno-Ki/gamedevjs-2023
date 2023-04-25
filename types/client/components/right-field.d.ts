/** @typedef {import('../state/initial').World} World */
/**
 * Build the data structure for svg that displays the right field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildRightFields(world: World): Array<any>;
/**
 * Compute the points for the right field faces.
 *
 * @param {World} world
 * @returns {Array<Array<Array<number>>>}
 */
export function computeRightFieldPoints(world: World): Array<Array<Array<number>>>;
export type World = import('../state/initial').World;
