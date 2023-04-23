/** @typedef {import('../initial').Theme} Theme */
/**
 * @typedef {object} Action
 * @property {SWITCH_THEME} type
 * @property {object} payload
 * @property {Theme} payload.theme
 */
/**
 * Action creator to switch the UI theme.
 *
 * @param {Theme} theme
 * @returns {Action}
 */
export function switchTheme(theme: Theme): Action;
export type Theme = import('../initial').Theme;
export type Action = {
    type: "SWITCH_THEME";
    payload: {
        theme: Theme;
    };
};
