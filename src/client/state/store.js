import { reducer } from './reducers/index.js'

/** @typedef {import('./actions/index').Action} Action */
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
      default:
        // No side effects to apply
    }
  }
}

const store = new Store(reducer)

// Export as Singleton
export default store
