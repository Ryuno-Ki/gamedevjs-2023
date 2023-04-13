/** @typedef {'about' | 'level' | 'new-game' | 'settings' | 'title'} ActiveScene */
/** @typedef {'UNINITIALISED' | 'RUNNING'} GameStatus */

/**
 * @typedef {object} State
 * @property {ActiveScene} State.activeScene
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 */

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  clock: [],
  gameStatus: 'UNINITIALISED'
}
