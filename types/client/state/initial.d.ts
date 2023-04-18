export namespace initialState {
    export const activeScene: string;
    export { defaultWorldId as activeWorld };
    export const clock: never[];
    export const gameStatus: string;
    export const players: {
        isBot: boolean;
        name: string;
    }[];
    export { scenes };
    export const worlds: {
        id: string;
        cubeLength: number;
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
export type World = {
    id: string;
    cubeLength: number;
};
export type State = {
    activeScene: Scene;
    activeWorld: string;
    clock: Array<number>;
    gameStatus: GameStatus;
    players: Array<Player>;
    worlds: Array<World>;
    scenes: Scenes;
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
declare const defaultWorldId: string;
import { scenes } from './fsm/scenes.js';
export {};
