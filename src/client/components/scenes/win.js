import { openmojis } from '../../../vendor/openmoji.js'
import { el } from '../el.js'
import { buildAnchors } from '../anchors.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */

/**
 * Renders the scene for win.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function winSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'win') {
    element.innerHTML = ''
  } else {
    const child = buildScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  return /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    buildHeadline('You win'),
    buildSolution(state),
    buildAnchors(state, 'win')
  ]))
}

/**
 * Build the data structure for displaying the world solution.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildSolution (state) {
  const { activeWorld, worlds } = state
  const world = /** @type {Array<World>} */(worlds).find((world) => world.id === activeWorld) || null
  const solution = world !== null
    ? world.solution.map((item) => {
      const emojis = openmojis.find((emoji) => emoji.hexcode === item)
      return emojis ? emojis.emoji : 'Invalid'
    }).join(' ')
    : 'Invalid'

  return ['div', ['emoji'], {}, solution]
}
