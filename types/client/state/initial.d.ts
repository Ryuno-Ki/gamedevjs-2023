export namespace initialState {
    export const activeScene: string;
    export { defaultWorldId as activeWorld };
    export const clock: never[];
    export const gameStatus: string;
    export const players: {
        isBot: boolean;
        name: string;
    }[];
    export const rounds: {};
    export { scenes };
    export const worlds: {
        id: string;
        cubeLength: number;
        facesPerColumn: number;
        facesPerRow: number;
    }[];
}
/**
 * }
 */
export type Scene = import('../components/scenes/index').Scene;
export type Scenes = import('./fsm/scenes').Scenes;
export type GameStatus = 'UNINITIALISED' | 'INITIALISED' | 'RUNNING';
export type Player = {
    isBot: boolean;
    name: string;
};
export type Round = {
    previousRound: string;
    turns: Array<string>;
};
export type Rounds = {
    [x: string]: Round;
};
export type World = {
    id: string;
    cubeLength: number;
    facesPerColumn: number;
    facesPerRow: number;
};
export type State = {
    activeScene: Scene;
    activeWorld: string;
    clock: Array<number>;
    gameStatus: GameStatus;
    players: Array<Player>;
    rounds: Rounds;
    scenes: Scenes;
    worlds: Array<World>;
};
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
declare const defaultWorldId: string;
import { scenes } from './fsm/scenes.js';
export {};
