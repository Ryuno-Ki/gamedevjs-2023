/**
 * Registers a component by name.
 *
 * @param {string} name
 * @param {*} component
 */
export function add(name: string, component: any): void;
/**
 * Creates a virtual DOM representing the new UI.
 *
 * @param {HTMLElement} root
 * @param {State} state
 * @returns {HTMLElement}
 */
export function render(root: HTMLElement, state: State): HTMLElement;
export type State = import('./state/initial').State;
