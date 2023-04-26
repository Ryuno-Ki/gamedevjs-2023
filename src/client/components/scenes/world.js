import { el } from '../el.js'
import { buildHeadline } from '../headline.js'

/** @typedef {import('../../state/initial').State} State */
/** @typedef {import('../../state/initial').World} World */

/**
 * Renders the scene for world selection.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function worldSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'world') {
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
    buildHeadline('Overworld'),
    buildWorldSelection(state)
  ]))
}

/**
 * Build the data structure to display a table of worlds to pick from.
 *
 * @private
 * @param {State} state
 * @returns {Array<*>}
 */
function buildWorldSelection (state) {
  const rows = state.worlds.map((world) => {
    const { id, facesPerColumn, facesPerRow } = world

    return ['tr', [], {}, '', [
      ['td', [], {}, id],
      ['td', [], {}, facesPerColumn],
      ['td', [], {}, facesPerRow],
      ['td', [], {}, '', [
        ['button', [], { 'data-id': id }, `World ${id}`]
      ]]
    ]]
  })

  return ['table', [], {}, '', [
    ['thead', [], {}, '', [
      ['tr', [], {}, '', [
        ['th', [], { scope: 'column' }, 'ID'],
        ['th', [], { scope: 'column' }, 'Columns'],
        ['th', [], { scope: 'column' }, 'Rows'],
        ['th', [], { scope: 'column' }, 'Play?']
      ]]
    ]],
    ['tbody', [], {}, '', rows]
  ]]
}
