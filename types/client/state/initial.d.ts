export namespace initialState {
    const activeScene: string;
    const clock: never[];
    const gameStatus: string;
}
/**
 * }
 * /**
 */
export type Scene = import('../components/scenes/index').Scene;
export type GameStatus = 'UNINITIALISED' | 'RUNNING';
export type State = {
    activeScene: Scene;
    clock: Array<number>;
    gameStatus: GameStatus;
};
