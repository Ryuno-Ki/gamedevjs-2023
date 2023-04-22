import { buildAnchors } from '../anchors.js'
import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */

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

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildScene (state) {
  return /** @type {HTMLDivElement} */(el('div', [], {}, '', [
    buildHeadline('About'),
    buildLicense(),
    buildOpenmoji(),
    buildAnchors(state, 'about')
  ]))
}

/**
 * Build the DOM to display the license notice.
 *
 * @private
 * @returns {Array<*>}
 */
function buildLicense () {
  return ['p', [], {}, 'This game is licensed under AGPL v3 or later.']
}

/**
 * Build the DOM to display the Openmoji license notice.
 *
 * @private
 * @returns {Array<*>}
 */
function buildOpenmoji () {
  return ['p', [], {}, '', [
    ['span', [], {}, 'All emojis designed by '],
    ['a', [], { href: 'https://openmoji.org/' }, 'OpenMoji'],
    ['span', [], {}, '– the open-source emoji and icon project. License: '],
    ['a', [], { href: 'https://creativecommons.org/licenses/by-sa/4.0/#' }, 'CC BY-SA 4.0']
  ]]
}
