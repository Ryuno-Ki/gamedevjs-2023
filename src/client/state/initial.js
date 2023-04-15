/** @typedef {import('../components/scenes/index').Scene} Scene}
/** @typedef {'UNINITIALISED' | 'RUNNING'} GameStatus */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 */

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  clock: [],
  gameStatus: 'UNINITIALISED'
}
