import { nanoid } from 'nanoid'

import { scenes } from './fsm/scenes.js'

/** @typedef {import('../components/scenes/index').Scene} Scene} */
/** @typedef {import('./fsm/scenes').Scenes} Scenes */
/** @typedef {'UNINITIALISED' | 'INITIALISED' | 'RUNNING'} GameStatus */
/** @typedef {'system' | 'dark' | 'light'} Theme */

/**
 * @typedef {object} Player
 * @property {boolean} Player.isBot
 * @property {string} Player.name
 */

/**
 * @typedef {object} Round
 * @property {string | null} Round.previousRound
 * @property {number} Round.round
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
 * @property {Array<string>} World.solution
 */

/**
 * @typedef {object} State
 * @property {string | null} State.activeRound
 * @property {Scene} State.activeScene
 * @property {string | null} State.activeWorld
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Array<Player>} State.players
 * @property {Rounds} State.rounds
 * @property {Scenes} State.scenes
 * @property {boolean} State.useOpenMoji
 * @property {Theme} State.theme
 * @property {Array<World>} State.worlds
 */

/* @type {State} */
export const initialState = {
  activeRound: null,
  activeScene: 'title',
  activeWorld: null,
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
  theme: 'system',
  useOpenMoji: true,
  worlds: [{
    id: nanoid(),
    cubeLength: 30,
    facesPerColumn: 1,
    facesPerRow: 1,
    solution: ['1F31E']
  }, {
    id: nanoid(),
    cubeLength: 30,
    facesPerColumn: 2,
    facesPerRow: 2,
    solution: ['1F32C', '1F31E']
  }, {
    id: nanoid(),
    cubeLength: 30,
    facesPerColumn: 3,
    facesPerRow: 3,
    solution: ['1F32C', '2601', '1F31E']
  }, {
    id: nanoid(),
    cubeLength: 30,
    facesPerColumn: 4,
    facesPerRow: 4,
    solution: ['2601', '1F32C', '1F31E', '1F327']
  }]
}
