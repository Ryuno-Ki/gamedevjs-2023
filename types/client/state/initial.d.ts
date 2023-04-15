export namespace initialState {
    const activeScene: string;
    const clock: never[];
    const gameStatus: string;
    namespace scenes {
        const id: string;
        const predictableActionArguments: boolean;
        const preserveActionOrder: boolean;
        const initial: string;
        namespace states {
            namespace about {
                namespace on {
                    namespace navigateToTitle {
                        const target: string;
                    }
                }
            }
            const level: {};
            namespace newGame {
                export namespace on_1 {
                    export namespace navigateToLevel {
                        const target_1: string;
                        export { target_1 as target };
                    }
                    export namespace navigateToTitle_1 {
                        const target_2: string;
                        export { target_2 as target };
                    }
                    export { navigateToTitle_1 as navigateToTitle };
                }
                export { on_1 as on };
            }
            namespace settings {
                export namespace on_2 {
                    export namespace navigateToTitle_2 {
                        const target_3: string;
                        export { target_3 as target };
                    }
                    export { navigateToTitle_2 as navigateToTitle };
                }
                export { on_2 as on };
            }
            namespace title {
                export namespace on_3 {
                    namespace navigateToAbout {
                        const target_4: string;
                        export { target_4 as target };
                    }
                    namespace navigateToNewGame {
                        const target_5: string;
                        export { target_5 as target };
                    }
                    namespace navigateToSettings {
                        const target_6: string;
                        export { target_6 as target };
                    }
                }
                export { on_3 as on };
            }
        }
    }
}
/**
 * }
 * /**
 */
export type Scene = import('../components/scenes/index').Scene;
export type GameStatus = 'UNINITIALISED' | 'RUNNING';
export type Transition = any;
export type TransitionEvent = {
    [x: string]: Transition;
};
export type FiniteState = {
    /**
     * - Possible state transitions
     */
    on?: {
        [x: string]: any;
    } | undefined;
};
export type FiniteStates = {
    [x: string]: FiniteState | undefined;
};
/**
 * XState definition for scenes.
 */
export type Scenes = {
    /**
     * - ID of state machine
     */
    id: string;
    /**
     * - Initial state in state machine
     */
    initial: Scene;
    /**
     * - State definition
     */
    states: FiniteStates;
};
export type State = {
    activeScene: Scene;
    clock: Array<number>;
    gameStatus: GameStatus;
    scenes: Scenes;
};
