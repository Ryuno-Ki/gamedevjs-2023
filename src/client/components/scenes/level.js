import { openmojis } from '../../../vendor/openmoji.js'
import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { el } from '../el.js'
import { svg } from '../svg.js'
import { mapDegToRadians, mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */

/**
 * Build the DOM to place the players on the UI.
 *
 * @private
 * @param {State} state
 * @returns {SVGGElement}
 */
function layoutPlayers (state) {
  const emojis = openmojis.find((emoji) => emoji.hexcode === '1F916')
  const robot = emojis ? emojis.emoji : ''
  const players = state.players.map((player, index) => {
    const x = index % 2 ? 70 : 0
    const y = index > 1 ? 70 : 0

    return [
      'text',
      ['player'],
      { 'data-index': index, x, y },
      '',
      [
        ['tspan', ['avatar'], { dx: 10, dy: 10 }, robot],
        ['tspan', ['nickname'], { dx: 5, dy: 20 }, player.name]
      ]
    ]
  })

  const container = /** @type {SVGGElement} */(svg(
    'g',
    ['players'],
    {},
    '',
    players
  ))
  return container
}

/**
 * Build the DOM for a face of the left field.
 *
 * @private
 * @param {Array<Array<number>>} points
 * @returns {*}
 */
function layoutLeftFieldFace (points) {
  return [
    'polygon',
    ['left', 'face'],
    { points: points.map((point) => point.join(',')).join(' ') }
  ]
}

/**
 * Build the DOM to place the left face of the cube.
 *
 * @private
 * @param {World} world
 * @returns {SVGGElement}
 */
function layoutLeftFields (world) {
  const { cubeLength } = world
  const rowHeight = cubeLength / world.facesPerRow
  const columnWidth = cubeLength / world.facesPerColumn

  const isometricAngle = mapDegToRadians(30)
  const diagonalHeight = rowHeight * Math.sin(isometricAngle)
  const diagonalWidth = columnWidth * Math.cos(isometricAngle)
  const totalHeight = cubeLength + diagonalHeight
  const verticalPadding = (100 - totalHeight) / 2

  /** @type {Array<Array<Array<number>>>} */
  const points = []
  for (let i = 0; i < world.facesPerRow; i++) {
    for (let j = 0; j < world.facesPerColumn; j++) {
      points.push([
        [50 - j * columnWidth, 100 - verticalPadding - i * rowHeight],
        [50 - j * columnWidth, 100 - verticalPadding - (i + 1) * rowHeight],
        [50 - (j + 1) * diagonalWidth, 100 - verticalPadding - (i + 1) * rowHeight],
        [50 - (j + 1) * diagonalWidth, 100 - verticalPadding - i * rowHeight]
      ])
    }
  }

  const faces = /** @type {SVGGElement} */(svg(
    'g',
    ['left', 'face'],
    {},
    '',
    points.map((point) => layoutLeftFieldFace(point))
  ))
  return faces
}

/**
 * Build the DOM to place the right face of the cube.
 *
 * @private
 * @param {number} cubeLength
 * @returns {SVGPolygonElement}
 */
function layoutRightField (cubeLength) {
  const isometricAngle = mapDegToRadians(30)
  const diagonalHeight = cubeLength * Math.sin(isometricAngle)
  const diagonalWidth = cubeLength * Math.cos(isometricAngle)
  const totalHeight = cubeLength + diagonalHeight
  const verticalPadding = (100 - totalHeight) / 2

  const points = [
    [50, 100 - verticalPadding],
    [50, 100 - verticalPadding - cubeLength],
    [50 + diagonalWidth, 100 - verticalPadding - cubeLength - diagonalHeight],
    [50 + diagonalWidth, 100 - verticalPadding - diagonalHeight]
  ]

  const face = /** @type {SVGPolygonElement} */(svg(
    'polygon',
    ['right', 'face'],
    { points: points.map((point) => point.join(',')).join(' ') }
  ))

  return face
}

/**
 * Build the DOM to place the top face of the cube.
 *
 * @private
 * @param {number} cubeLength
 * @returns {SVGPolygonElement}
 */
function layoutTopField (cubeLength) {
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

  const face = /** @type {SVGPolygonElement} */(svg(
    'polygon',
    ['top', 'face'],
    { points: points.map((point) => point.join(',')).join(' ') }
  ))

  return face
}

/**
 * Build the DOM to place the field on the UI.
 *
 * @private
 * @param {State} state
 * @returns {SVGElement}
 */
function layoutField (state) {
  const id = state.activeWorld
  const world = state.worlds.find((world) => world.id === id) || null

  const container = /** @type {SVGElement} */(svg(
    'svg',
    ['field'],
    {
      height: '300',
      id,
      viewBox: '0 0 100 100',
      width: '300',
      xmlns: 'http://www.w3.org/2000/svg'
    }
  ))

  if (!world) {
    return container
  }

  const { cubeLength } = /** @type {World} */(world)
  container.appendChild(layoutPlayers(state))
  container.appendChild(layoutLeftFields(world))
  container.appendChild(layoutRightField(cubeLength))
  container.appendChild(layoutTopField(cubeLength))
  return container
}

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  const container = /** @type {HTMLDivElement} */(el('div'))
  container.appendChild(layoutField(state))

  const transitions = getTransitionsForSceneFromState(state, 'level')
  const anchors = mapTransitionsToLinks(transitions)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for level.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function levelSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'level') {
    element.innerHTML = ''
  } else {
    const child = buildScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
