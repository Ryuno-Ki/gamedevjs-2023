export namespace initialState {
    export const activeScene: string;
    export const clock: never[];
    export const gameStatus: string;
    export const players: {
        isBot: boolean;
        name: string;
    }[];
    export { scenes };
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
export type State = {
    activeScene: Scene;
    clock: Array<number>;
    gameStatus: GameStatus;
    players: Array<Player>;
    scenes: Scenes;
};
import { scenes } from './fsm/scenes.js';
