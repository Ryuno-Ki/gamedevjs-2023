/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {number} payload.index
 * @property {boolean} payload.isBot
 */
/**
 * Action creator to declare a player to be a bot.
 *
 * @param {number} index
 * @param {boolean} isBot
 * @returns {Action}
 */
export function setIsBot(index: number, isBot: boolean): Action;
export type Action = {
    type: string;
    payload: {
        index: number;
        isBot: boolean;
    };
};
