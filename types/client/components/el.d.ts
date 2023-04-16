/**
 * Utility function to generate a DOM.
 *
 * @param {string} name - A DOM nodeName
 * @param {Array<string>} classList - HTML classes to assign
 * @param {Object<string, string>} attributes - Additional HTML attributes
 * @param {string} text - Text content of node
 * @param {Array<*>} children - Recursively invoke this function
 * @returns {HTMLElement}
 */
export function el(name: string, classList?: Array<string>, attributes?: {
    [x: string]: string;
}, text?: string, children?: Array<any>): HTMLElement;
