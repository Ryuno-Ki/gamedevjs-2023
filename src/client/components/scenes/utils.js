import { el } from '../el.js'

/** @typedef {import('../scenes/index').Scene} Scene */

/**
 * Calculates the radians angle to a given degree.
 *
 * @param {number} degree
 * @returns {number}
 */
export function mapDegToRadians (degree) {
  // 180° = PI rad
  return degree * Math.PI / 180
}

/**
 * Turns transitions into anchor elements.
 *
 * @param {Array<Scene>} transitions
 * @returns {Array<HTMLAnchorElement>}
 */
export function mapTransitionsToLinks (transitions) {
  return transitions.map((transition) => {
    return /** @type{HTMLAnchorElement} */(el('a', [], { href: `#${transition}` }, transition))
  })
}
