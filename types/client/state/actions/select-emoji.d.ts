/**
 * @typedef {object} Action
 * @property {string} type
 * @property {object} payload
 * @property {string} payload.emoji
 */
/**
 * Action creator to pick an emoji as a turn in a round.
 *
 * @param {string} emoji
 * @returns {Action}
 */
export function selectEmoji(emoji: string): Action;
export type Action = {
    type: string;
    payload: {
        emoji: string;
    };
};
