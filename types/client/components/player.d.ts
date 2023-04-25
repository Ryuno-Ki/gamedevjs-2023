/** @typedef {import('../state/initial').Player} Player */
/**
 * Build the data structure for svg that displays a player on the field.
 *
 * @param {Player} player
 * @param {number} index
 * @returns {Array<*>}
 */
export function buildPlayer(player: Player, index: number): Array<any>;
export type Player = import('../state/initial').Player;
