/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.time
 */
/**
 * Action creator for progressing internal clock.
 *
 * @param {number} time
 * @returns {Action}
 */
export function tick(time: number): Action;
export type Action = {
    type: string;
    payload: {
        time: number;
    };
};
