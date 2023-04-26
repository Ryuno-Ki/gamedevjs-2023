export namespace initialState {
    export const activeRound: null;
    export const activeScene: string;
    export const activeWorld: null;
    export const clock: never[];
    export const gameStatus: string;
    export const players: {
        isBot: boolean;
        name: string;
    }[];
    export const rounds: {};
    export { scenes };
    export const theme: string;
    export const worlds: {
        id: string;
        cubeLength: number;
        facesPerColumn: number;
        facesPerRow: number;
        solution: string[];
    }[];
}
/**
 * }
 */
export type Scene = import('../components/scenes/index').Scene;
export type Scenes = import('./fsm/scenes').Scenes;
export type GameStatus = 'UNINITIALISED' | 'INITIALISED' | 'RUNNING';
export type Theme = 'system' | 'dark' | 'light';
export type Player = {
    isBot: boolean;
    name: string;
};
export type Round = {
    previousRound: string | null;
    round: number;
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
    solution: Array<string>;
};
export type State = {
    activeRound: string | null;
    activeScene: Scene;
    activeWorld: string | null;
    clock: Array<number>;
    gameStatus: GameStatus;
    players: Array<Player>;
    rounds: Rounds;
    scenes: Scenes;
    theme: Theme;
    worlds: Array<World>;
};
import { scenes } from './fsm/scenes.js';
