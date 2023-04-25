import { buildLeftFields } from './left-field.js'
import { buildPlayers } from './players.js'
import { buildRightFields } from './right-field.js'
import { svg } from './svg.js'
import { buildTopFields } from './top-field.js'

/** @typedef {import('../state/initial').State} State */
/** @typedef {import('../state/initial').World} World */

/**
 * Build the SVG DOM for the field.
 *
 * @param {State} state
 * @returns {SVGElement}
 */
export function buildField (state) {
  const attributes = {
    height: '300',
    id: state.activeWorld,
    viewBox: '0 0 100 100',
    width: '300',
    xmlns: 'http://www.w3.org/2000/svg'
  }

  const children = buildChildren(state)

  return svg('svg', ['field'], attributes, '', children)
}

/**
 * Build the data structure for svg that contains all SVG elements.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildChildren (state) {
  const { activeWorld, worlds } = state
  /** @type {World | null} */
  const world = worlds.find((w) => w.id === activeWorld) || null

  if (world === null) {
    return []
  }

  return [
    buildPlayers(state),
    buildLeftFields(world),
    buildRightFields(world),
    buildTopFields(world)
  ]
}
