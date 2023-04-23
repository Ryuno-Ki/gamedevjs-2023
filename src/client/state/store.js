import { SWITCH_THEME, SWITCH_TO_SCENE } from '../../constants.js'
import { reducer } from './reducers/index.js'

/** @typedef {import('./../components/scenes/index').Scene} Scene */
/** @typedef {import('./actions/index').Action} Action */
/** @typedef {import('./actions/switch-theme').Action} SwitchThemeAction */
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
      case SWITCH_THEME:
        updateTheme(/** @type {SwitchThemeAction} */(action).payload)
        break
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
 * Displays the scene in the <title>.
 *
 * @private
 * @param {SwitchToSceneAction['payload']} payload
 */
function updateDocumentTitle (payload) {
  const { scene } = payload
  const title = [scene, 'Alea Parcae', 'TIME', 'GameDevJS 2023'].join(' | ')
  document.title = title
}

/**
 * Sets a CSS class in the DOM so CSS can switch the theme.
 *
 * @private
 * @param {SwitchThemeAction['payload']} payload
 */
function updateTheme (payload) {
  const { theme } = payload
  document.body.classList.remove('theme-system')
  document.body.classList.remove('theme-dark')
  document.body.classList.remove('theme-light')
  document.body.classList.add(`theme-${theme}`)
}

// Export as Singleton
export default store
