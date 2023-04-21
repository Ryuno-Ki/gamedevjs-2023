/**
 * Combined reducer to delegate depending on action.type.
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function reducer(state: State, action: Action): State;
export type Action = import('../actions/index').Action;
export type State = import('../initial').State;
