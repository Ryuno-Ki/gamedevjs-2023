/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.index
 * @property {string} payload.nickname
 */
/**
 * Action creator to set a nickname.
 *
 * @param {number} index
 * @param {string} nickname
 * @returns {Action}
 */
export function setNickname(index: number, nickname: string): Action;
export type Action = {
    type: string;
    payload: {
        index: number;
        nickname: string;
    };
};
