/**
 * Utility function to generate SVG.
 *
 * @param {string} name - A SVG name
 * @param {Array<string>} classList - HTML classes to assign
 * @param {Object<string, string>} attributes - Additional HTML attributes
 * @param {Array<*>} children - Recursively invoke this function
 * @returns {SVGElement}
 */
export function svg(name: string, classList?: Array<string>, attributes?: {
    [x: string]: string;
}, children?: Array<any>): SVGElement;
