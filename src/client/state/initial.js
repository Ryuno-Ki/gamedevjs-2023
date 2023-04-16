import { scenes } from './fsm/scenes.js'

/** @typedef {import('../components/scenes/index').Scene} Scene} */
/** @typedef {import('./fsm/scenes').Scenes} Scenes */
/** @typedef {'UNINITIALISED' | 'INITIALISED' | 'RUNNING'} GameStatus */

/**
 * @typedef {object} Player
 * @property {boolean} Player.isBot
 * @property {string} Player.name
 */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Array<Player>} State.players
 * @property {Scenes} State.scenes
 */

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  clock: [],
  gameStatus: 'UNINITIALISED',
  players: [{
    isBot: false,
    name: ''
  }, {
    isBot: false,
    name: ''
  }, {
    isBot: false,
    name: ''
  }],
  scenes
}
