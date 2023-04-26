/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {boolean} payload.useOpenMoji
 */
/**
 * Action creator to turn on and off the display of OpenMoji emojis.
 *
 * @param {boolean} useOpenMoji
 * @returns {Action}
 */
export function setUseOpenMoji(useOpenMoji: boolean): Action;
export type Action = {
    type: string;
    payload: {
        useOpenMoji: boolean;
    };
};
