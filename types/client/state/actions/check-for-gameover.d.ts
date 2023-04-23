/**
 * @typedef {object} Action
 * @property {CHECK_FOR_GAMEOVER} type
 * @property {object} payload
 */
/**
 * Action creator to check for gameover condition.
 *
 * @returns {Action}
 */
export function checkForGameover(): Action;
export type Action = {
    type: "CHECK_FOR_GAMEOVER";
    payload: object;
};
