/**
 * Sets the nickname.
 *
 * @param {State} state
 * @param {payload} payload
 * @returns {State}
 */
export function setNickname(state: State, payload: payload): State;
export type State = import('../store').State;
export type payload = {
    index: number;
    nickname: string;
};
