/** @typedef {import('./actions/index').Action} Action */
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
export type Action = import('./actions/index').Action;
export type State = import('./initial').State;
declare const store: Store;
