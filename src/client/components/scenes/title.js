/** @typedef {import('../scenes/index').Scene} Scene */
/** @typedef {import('../../state/initial').State} State */

/**
 * Extracts the transitions from title scene from state.
 *
 * @private
 * @param {State} state
 * @returns {Array<Scene>}
 */
function getTransitionsFromState (state) {
  const { scenes: { states: { title: titleState } } } = state
  const transitionEvents = titleState ? titleState.on : []
  if (!transitionEvents) {
    console.info('Expected transitions from title scene but found not')
    return []
  }

  const transitions = Object
    .values(transitionEvents)
    .map((event) => event.target)
  return transitions
}

/**
 * Turns transitions into anchor elements.
 *
 * @private
 * @param {Array<Scene>} transitions
 * @returns {Array<HTMLAnchorElement>}
 */
function mapTransitionsToLinks (transitions) {
  return transitions.map((transition) => {
    const anchor = document.createElement('a')
    anchor.href = `#${transition}`
    anchor.textContent = transition
    return anchor
  })
}

/**
 * Build the DOM to attach to the target element.
 *
 * @private
 * @param {State} state
 * @returns {HTMLDivElement}
 */
function buildTitleScene (state) {
  const container = document.createElement('div')
  const headline = document.createElement('h1')
  headline.textContent = 'Title Scene'

  const transitions = getTransitionsFromState(state)
  const anchors = mapTransitionsToLinks(transitions)
  container.appendChild(headline)
  anchors.forEach((anchor) => container.appendChild(anchor))
  return container
}

/**
 * Renders the scene for title.
 *
 * @param {HTMLElement} targetElement
 * @param {State} state
 * @returns {HTMLElement}
 */
export function titleSceneComponent (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  if (state.activeScene !== 'title') {
    element.innerHTML = ''
  } else {
    const child = buildTitleScene(state)
    // TODO: Think about how to use .replaceWith but keep it idempotent
    element.innerHTML = child.outerHTML
  }

  return element
}
