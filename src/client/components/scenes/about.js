import { getTransitionsForSceneFromState } from '../../state/utils.js'
import { el } from '../el.js'
import { mapTransitionsToLinks } from './utils.js'

/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  const license = ['p', [], {}, 'This game is licensed under AGPL v3 or later.']
  const openmoji = ['p', [], {}, '', [
    ['span', [], {}, 'All emojis designed by '],
    ['a', [], { href: 'https://openmoji.org/' }, 'OpenMoji'],
    ['span', [], {}, '– the open-source emoji and icon project. License: '],
    ['a', [], { href: 'https://creativecommons.org/licenses/by-sa/4.0/#' }, 'CC BY-SA 4.0']
  ]]
  const container = /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    ['h1', [], {}, 'About Scene'],
    license,
    openmoji
  ]))

  const transitions = getTransitionsForSceneFromState(state, 'about')
  const anchors = mapTransitionsToLinks(transitions)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for about.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function aboutSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'about') {
    element.innerHTML = ''
  } else {
    const child = buildScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
