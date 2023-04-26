/** @typedef {import('./../components/scenes/index').Scene} Scene */
/** @typedef {import('./actions/index').Action} Action */
/** @typedef {import('./actions/switch-theme').Action} SwitchThemeAction */
/** @typedef {import('./actions/switch-to-scene').Action} SwitchToSceneAction */
/** @typedef {import('./actions/set-use-open-moji').Action} SetUseOpenMojiAction */
/** @typedef {import('./initial').State} State */
/**
 * Store to manage state
 */
export class Store {
    /** @param {function} reducer */
    constructor(reducer: Function);
    reducer: Function;
    state: any;
    /** @param {Action} action */
    dispatch(action: Action): Promise<void>;
    /**
     * Get the current state.
     *
     * @returns {State}
     */
    getState(): State;
    /**
     * Apply side effects if needed.
     *
     * @protected
     * @param {Action} action
     */
    protected _applySideEffects(action: Action): void;
}
export default store;
export type Scene = import('./../components/scenes/index').Scene;
export type Action = import('./actions/index').Action;
export type SwitchThemeAction = import('./actions/switch-theme').Action;
export type SwitchToSceneAction = import('./actions/switch-to-scene').Action;
export type SetUseOpenMojiAction = import('./actions/set-use-open-moji').Action;
export type State = import('./initial').State;
declare const store: Store;
