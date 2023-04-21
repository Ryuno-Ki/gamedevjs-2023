/** @typedef {import('./components/scenes/index').Scene} Scene */
/**
 * Registers event listeners via delegation.
 */
export function registerEventListeners(): void;
/**
 * Change event handler.
 *
 * @param {Event} event
 */
export function onChange(event: Event): Promise<void>;
/**
 * Click event handler.
 *
 * @param {MouseEvent} event
 */
export function onClick(event: MouseEvent): Promise<void>;
/**
 * Input event handler.
 *
 * @param {Event} event
 */
export function onInput(event: Event): Promise<void>;
export type Scene = import('./components/scenes/index').Scene;
