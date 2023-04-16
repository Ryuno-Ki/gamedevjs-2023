import { scenes } from './fsm/scenes.js'

/** @typedef {import('../components/scenes/index').Scene} Scene} */
/** @typedef {import('./fsm/scenes').Scenes} Scenes */
/** @typedef {'UNINITIALISED' | 'INITIALISED' | 'RUNNING'} GameStatus */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Scenes} State.scenes
 */

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  clock: [],
  gameStatus: 'UNINITIALISED',
  scenes
}
