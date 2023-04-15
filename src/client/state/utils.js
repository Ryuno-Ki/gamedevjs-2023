/** @typedef {import('../components/scenes/index').Scene} Scene */
/** @typedef {import('./initial').State} State */

/**
 * Extracts the transitions from given scene from state.
 *
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<Scene>}
 */
export function getTransitionsForSceneFromState (state, scene) {
  const { scenes: { states } } = state
  const sceneState = states[scene]

  if (!sceneState) {
    console.info('Expected scene but found none', scene)
    return []
  }

  const transitionEvents = sceneState ? sceneState.on : []
  if (!transitionEvents) {
    console.info('Expected transitions from scene but found none')
    return []
  }

  const transitions = Object
    .values(transitionEvents)
    .map((event) => event.target)
  return transitions
}
