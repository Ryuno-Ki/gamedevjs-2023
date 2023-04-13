import { initialState } from '../initial.js'
import { TICK } from '../../../constants.js'
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
    case TICK:
      return tick(state, action.payload)
    default:
      return state
  }
}
