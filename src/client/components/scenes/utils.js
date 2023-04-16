import { el } from '../el.js'

/** @typedef {import('../scenes/index').Scene} Scene */

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
