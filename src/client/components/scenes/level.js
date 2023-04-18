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
 * @returns HTMLDivElement
 */
function layoutPlayers (state) {
  const emojis = openmojis.find((emoji) => emoji.hexcode === '1F916')
  const robot = emojis ? emojis.emoji : ''
  const players = state.players.map((player, index) => {
    return [
      'div',
      ['player'],
      { 'data-index': index },
      '',
      [
        ['div', ['avatar'], {}, robot],
        ['span', ['nickname'], {}, player.name]
      ]
    ]
  })

  const container = /** @type {HTMLDivElement} */(el(
    'div',
    ['players'],
    {},
    '',
    players
  ))
  return container
}

/**
 * Build the DOM to place the field on the UI.
 *
 * @private
 * @param {State} state
 * @returns SVGElement
 */
function layoutField (state) {
  const id = state.activeWorld
  const world = state.worlds.find((world) => world.id === id) || {}

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

  container.appendChild(/** @type {SVGElement} */(svg(
    'polygon',
    ['cube'],
    { points: points.map((point) => point.join(',')).join(' ') }
  )))
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
  container.appendChild(layoutPlayers(state))
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
