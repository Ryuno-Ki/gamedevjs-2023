import { SWITCH_TO_SCENE } from '../../constants.js'
import { reducer } from './reducers/index.js'

/** @typedef {import('./../components/scenes/index').Scene} Scene */
/** @typedef {import('./actions/index').Action} Action */
/** @typedef {import('./actions/switch-to-scene').Action} SwitchToSceneAction */
/** @typedef {import('./initial').State} State */

/**
 * Store to manage state
 */
export class Store {
  /** @param {function} reducer */
  constructor (reducer) {
    this.reducer = reducer
    this.state = reducer(undefined, { type: '' })
  }

  /** @param {Action} action */
  async dispatch (action) {
    this.state = this.reducer(this.state, action)
    this._applySideEffects(action)
  }

  /**
   * Get the current state.
   *
   * @returns {State}
   */
  getState () {
    return this.state
  }

  /**
   * Apply side effects if needed.
   *
   * @protected
   * @param {Action} action
   */
  _applySideEffects (action) {
    switch (action.type) {
      case SWITCH_TO_SCENE:
        updateDocumentTitle(/** @type {SwitchToSceneAction} */(action).payload)
        break
      default:
        // No side effects to apply
    }
  }
}

const store = new Store(reducer)

/**
 *
 * @private
 * @param {SwitchToSceneAction['payload']} payload
 */
function updateDocumentTitle (payload) {
  const { scene } = payload
  const title = [scene, 'TIME', 'GameDevJS 2023'].join(' | ')
  document.title = title
}

// Export as Singleton
export default store
