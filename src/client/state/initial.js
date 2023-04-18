import { nanoid } from 'nanoid'

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
 * @typedef {object} World
 * @property {string} World.id
 * @property {number} World.cubeLength
 */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {string} State.activeWorld
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Array<Player>} State.players
 * @property {Array<World>} State.worlds
 * @property {Scenes} State.scenes
 */

const defaultWorldId = nanoid()

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  activeWorld: defaultWorldId,
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
  scenes,
  worlds: [{
    id: defaultWorldId,
    cubeLength: 30
  }]
}
