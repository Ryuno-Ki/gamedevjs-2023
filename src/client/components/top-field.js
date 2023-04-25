import { mapDegToRadians } from './scenes/utils.js'

/** @typedef {import('../state/initial').World} World */

/**
 * Build the data structure for svg that displays the top field of the world cube.
 *
 * @param {World} world
 * @returns {Array<*>}
 */
export function buildTopFields (world) {
  const { cubeLength } = world
  const isometricAngle = mapDegToRadians(30)
  const diagonalHeight = cubeLength * Math.sin(isometricAngle)
  const diagonalWidth = cubeLength * Math.cos(isometricAngle)
  const totalHeight = cubeLength + diagonalHeight
  const verticalPadding = (100 - totalHeight) / 2

  const points = [
    [50, 100 - verticalPadding - cubeLength],
    [50 - diagonalWidth, 100 - verticalPadding - cubeLength - diagonalHeight],
    [50, 100 - verticalPadding - cubeLength - diagonalHeight - diagonalHeight],
    [50 + diagonalWidth, 100 - verticalPadding - cubeLength - diagonalHeight]
  ]
    .map((point) => point.join(','))
    .join(' ')

  return ['g', ['top', 'faces'], {}, '', [
    ['polygon', ['top', 'face'], { points }]
  ]]
}
