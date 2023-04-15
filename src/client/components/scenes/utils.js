/** @typedef {import('../scenes/index').Scene} Scene */

/**
 * Turns transitions into anchor elements.
 *
 * @param {Array<Scene>} transitions
 * @returns {Array<HTMLAnchorElement>}
 */
export function mapTransitionsToLinks (transitions) {
  return transitions.map((transition) => {
    const anchor = document.createElement('a')
    anchor.href = `#${transition}`
    anchor.textContent = transition
    return anchor
  })
}
