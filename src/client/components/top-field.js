import { mapDegToRadians } from './scenes/utils.js'
import { buildFace } from './face.js'

/** @typedef {import('../state/initial').World} World */

/**
 * Build the data structure for svg that displays the top field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildTopFields (world) {
  const points = computeTopFieldPoints(world)

  return ['g', ['top', 'faces'], {}, '',
    points.map((point) => buildFace(point, 'top'))
  ]
}

/**
 * Compute the points for the top field faces.
 *
 * @param {World} world
 * @returns {Array<Array<Array<number>>>}
 */
export function computeTopFieldPoints (world) {
  const { cubeLength, facesPerColumn, facesPerRow } = world
  const rowHeight = cubeLength / facesPerRow
  const columnWidth = cubeLength / facesPerColumn

  const isometricAngle = mapDegToRadians(30)
  const diagonalHeight = rowHeight * Math.sin(isometricAngle)
  const diagonalWidth = columnWidth * Math.cos(isometricAngle)
  const totalHeight = cubeLength + cubeLength * Math.sin(isometricAngle)
  const verticalPadding = (100 - totalHeight) / 2

  /** @type {Array<Array<Array<number>>>} */
  const points = []
  for (let i = 0; i < facesPerRow; i++) {
    for (let j = 0; j < facesPerColumn; j++) {
      points.push([
        [50 + (i - j) * diagonalWidth, 100 - verticalPadding - cubeLength - (i + j) * diagonalHeight],
        [50 + (i - 1 - j) * diagonalWidth, 100 - verticalPadding - cubeLength - (i + 1 + j) * diagonalHeight],
        [50 + (i - j) * diagonalWidth, 100 - verticalPadding - cubeLength - (i + 1) * diagonalHeight - (j + 1) * diagonalHeight],
        [50 + (i + 1 - j) * diagonalWidth, 100 - verticalPadding - cubeLength - (i + 1 + j) * diagonalHeight]
      ])
    }
  }

  return points
}
