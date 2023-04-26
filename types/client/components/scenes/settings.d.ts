/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').Theme} Theme */
/**
 * @typedef {object} ThemeOption
 * @property {Theme} ThemeOption.value
 * @property {'selected'} [ThemeOption.selected]
 */
/**
 * @typedef {object} EmojiOption
 * @property {string} EmojiOption.id
 * @property {'checkbox'} EmojiOption.type
 * @property {'checked'} [EmojiOption.checked]
 */
/**
 * Renders the scene for settings.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function settingsSceneComponent(targetElement: HTMLElement, state: State): HTMLElement;
export type State = import('../../state/initial').State;
export type Theme = import('../../state/initial').Theme;
export type ThemeOption = {
    value: Theme;
    selected?: "selected" | undefined;
};
export type EmojiOption = {
    id: string;
    type: 'checkbox';
    checked?: "checked" | undefined;
};
