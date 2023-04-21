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
 * @typedef {object} Round
 * @property {string} Round.previousRound
 * @property {Array<string>} Round.turns
 */

/**
 * @typedef {Object<string, Round>} Rounds
 */

/**
 * @typedef {object} World
 * @property {string} World.id
 * @property {number} World.cubeLength
 * @property {number} World.facesPerColumn
 * @property {number} World.facesPerRow
 */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {string} State.activeWorld
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Array<Player>} State.players
 * @property {Rounds} State.rounds
 * @property {Scenes} State.scenes
 * @property {Array<World>} State.worlds
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
  rounds: {},
  scenes,
  worlds: [{
    id: defaultWorldId,
    cubeLength: 30,
    facesPerColumn: 1,
    facesPerRow: 1
  }]
}
