export namespace initialState {
    const activeScene: string;
    const clock: never[];
    const gameStatus: string;
}
export type ActiveScene = 'about' | 'level' | 'new-game' | 'settings' | 'title';
export type GameStatus = 'UNINITIALISED' | 'RUNNING';
export type State = {
    activeScene: ActiveScene;
    clock: Array<number>;
    gameStatus: GameStatus;
};
