/** @typedef {import('../state/initial').World} World */
/**
 * Build the data structure for svg that displays the top field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildTopFields(world: World): Array<any>;
/**
 * Compute the points for the top field faces.
 *
 * @param {World} world
 * @returns {Array<Array<Array<number>>>}
 */
export function computeTopFieldPoints(world: World): Array<Array<Array<number>>>;
export type World = import('../state/initial').World;
