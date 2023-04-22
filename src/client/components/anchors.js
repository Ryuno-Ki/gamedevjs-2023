import { getTransitionsForSceneFromState } from '../state/utils.js'
import { mapTransitionsToLinks } from './scenes/utils.js'

/** @typedef {import('../state/initial').State} State */
/** @typedef {import('./scenes/index').Scene} Scene */

/**
 * Builds the anchors leading from the given scene.
 *
 * @param {State} state
 * @param {Scene} scene
 * @returns {Array<*>}
 */
export function buildAnchors (state, scene) {
  const transitions = getTransitionsForSceneFromState(state, 'about')
  const anchors = ['div', ['actions'], {}, '', mapTransitionsToLinks(transitions)]
  return anchors
}
