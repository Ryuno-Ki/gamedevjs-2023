/**
 * Build the DOM for a face of the field.
 *
 * @param {Array<Array<number>>} points
 * @param {'left' | 'right' | 'top'} direction
 * @returns {Array<*>}
 */
export function buildFace (points, direction) {
  return [
    'polygon',
    [direction, 'face'],
    { points: points.map((point) => point.join(',')).join(' ') }
  ]
}
