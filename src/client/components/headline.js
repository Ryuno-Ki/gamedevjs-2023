/**
 * Build the DOM to display the headline.
 *
 * @param {string} headline
 * @returns {Array<*>}
 */
export function buildHeadline (headline) {
  return ['h1', [], {}, headline]
}
