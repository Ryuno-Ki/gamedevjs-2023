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
 * Build the DOM for a face of the field.
 *
 * @private
 * @param {Array<Array<number>>} points
 * @param {'left' | 'right' | 'top'} direction
 * @returns {*}
 */
function face (points, direction) {
  return [
    'polygon',
    [direction, 'face'],
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

  const faces = /** @type {SVGGElement} */(svg(
    'g',
    ['left', 'face'],
    {},
    '',
    points.map((point) => face(point, 'left'))
  ))
  return faces
}

/**
 * Build the DOM to place the right face of the cube.
 *
 * @private
 * @param {World} world
 * @returns {SVGGElement}
 */
function layoutRightField (world) {
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
        [50 + j * diagonalWidth, 100 - verticalPadding],
        [50 + j * diagonalWidth, 100 - verticalPadding - (i + 1) * rowHeight],
        [50 + (j + 1) * diagonalWidth, 100 - verticalPadding - (i + 1) * rowHeight - diagonalHeight],
        [50 + (j + 1) * diagonalWidth, 100 - verticalPadding - diagonalHeight]
      ])
    }
  }

  return /** @type {SVGPolygonElement} */(svg(
    'g',
    ['right', 'face'],
    {},
    '',
    points.map((point) => face(point, 'right'))
  ))
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
  container.appendChild(layoutRightField(world))
  container.appendChild(layoutTopField(cubeLength))
  return container
}

/**
 * Build the DOM to place the round data on the UI.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function layoutRound (state) {
  const { activeRound, activeWorld, rounds, worlds } = state
  const world = worlds.find((world) => world.id === activeWorld) || null

  const round = activeRound !== null ? rounds[activeRound].round : 'Invalid'
  /** @type {Array<string>} */
  const options = world !== null
    ? /** @type {Array<string>} */([]).concat(world.solution)
    : /** @type {Array<string>} */([])
  options.sort()

  const container = /** @type {HTMLDivElement} */(el(
    'div',
    [],
    {},
    `Round ${round}`,
    [
      ['select', [], {}, '',
        options.map((option) => {
          const emojis = openmojis.find((emoji) => emoji.hexcode === option)
          const display = emojis ? emojis.emoji : 'Invalid'
          return ['option', [], { value: option }, display]
        })
      ]
    ]
  ))

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
  container.appendChild(layoutRound(state))
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
