import { initialState } from '../initial.js'
import { SET_NICKNAME, SWITCH_TO_SCENE, TICK } from '../../../constants.js'
import { setNickname } from './set-nickname.js'
import { switchToScene } from './switch-to-scene.js'
import { tick } from './tick.js'

/** @typedef {import('../actions/index').Action} Action */
/** @typedef {import('../initial').State} State */

/**
 * Combined reducer to delegate depending on action.type.
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return /** @type {State} */(initialState)
  }

  switch (action.type) {
    case SET_NICKNAME:
      return setNickname(
        state,
        /** @type {import('../actions/set-nickname').Action} */(action).payload
      )
    case SWITCH_TO_SCENE:
      return switchToScene(
        state,
        /** @type {import('../actions/switch-to-scene').Action} */(action).payload
      )
    case TICK:
      return tick(
        state,
        /** @type {import('../actions/tick').Action} */(action).payload
      )
    default:
      console.debug('Unknown action type', action.type)
      return state
  }
}
