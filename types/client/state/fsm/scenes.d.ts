export namespace scenes {
    const id: string;
    const predictableActionArguments: boolean;
    const preserveActionOrder: boolean;
    const initial: string;
    const states: {
        about: {
            on: {
                navigateToTitle: {
                    target: string;
                };
            };
        };
        gameover: {
            on: {
                navigateToTitle: {
                    target: string;
                };
            };
        };
        level: {
            on: {
                navigateToGameover: {
                    target: string;
                };
                navigateToWin: {
                    target: string;
                };
            };
        };
        'new-game': {
            on: {
                navigateToLevel: {
                    target: string;
                };
                navigateToTitle: {
                    target: string;
                };
            };
        };
        settings: {
            on: {
                navigateToTitle: {
                    target: string;
                };
            };
        };
        title: {
            on: {
                navigateToAbout: {
                    target: string;
                };
                navigateToNewGame: {
                    target: string;
                };
                navigateToSettings: {
                    target: string;
                };
            };
        };
        win: {
            on: {
                navigateToTitle: {
                    target: string;
                };
            };
        };
    };
}
/**
 * }
 */
export type Scene = import('../../components/scenes/index').Scene;
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
