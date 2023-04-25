import { mapDegToRadians } from './scenes/utils.js'
import { buildFace } from './face.js'

/** @typedef {import('../state/initial').World} World */

/**
 * Build the data structure for svg that displays the left field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildLeftFields (world) {
  const { cubeLength, facesPerColumn, facesPerRow } = world
  const rowHeight = cubeLength / facesPerRow
  const columnWidth = cubeLength / facesPerColumn

  const isometricAngle = mapDegToRadians(30)
  const diagonalHeight = rowHeight * Math.sin(isometricAngle)
  const diagonalWidth = columnWidth * Math.cos(isometricAngle)
  const totalHeight = cubeLength + diagonalHeight
  const verticalPadding = (100 - totalHeight) / 2

  /** @type {Array<Array<Array<number>>>} */
  const points = []
  for (let i = 0; i < facesPerRow; i++) {
    for (let j = 0; j < facesPerColumn; j++) {
      points.push([
        [50 - j * diagonalWidth, 100 - verticalPadding - i * rowHeight],
        [50 - j * diagonalWidth, 100 - verticalPadding - (i + 1) * rowHeight],
        [50 - (j + 1) * diagonalWidth, 100 - verticalPadding - (i + 1) * rowHeight - diagonalHeight],
        [50 - (j + 1) * diagonalWidth, 100 - verticalPadding - i * rowHeight - diagonalHeight]
      ])
    }
  }

  return ['g', ['left', 'faces'], {}, '',
    points.map((point) => buildFace(point, 'left'))
  ]
}
