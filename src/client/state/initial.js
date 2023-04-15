/** @typedef {import('../components/scenes/index').Scene} Scene}
/** @typedef {'UNINITIALISED' | 'INITIALISED' | 'RUNNING'} GameStatus */

/**
 * @typedef {Object.<'target', Scene>} Transition
 */

/**
 * @typedef {Object.<string, Transition>} TransitionEvent
 */

/**
 * @typedef {object} FiniteState
 * @property {TransitionEvent} [on] - Possible state transitions
 */

/**
 * @typedef {Object.<string, FiniteState | undefined>} FiniteStates
 */

/**
 * XState definition for scenes.
 *
 * @typedef {object} Scenes
 * @property {string} id - ID of state machine
 * @property {Scene} initial - Initial state in state machine
 * @property {FiniteStates} states - State definition
 * @see {@link https://xstate.js.org/docs/}
 * @see {@link https://stately.ai/registry/new}
 */

/**
 * @typedef {object} State
 * @property {Scene} State.activeScene
 * @property {Array<number>} State.clock
 * @property {GameStatus} State.gameStatus
 * @property {Scenes} State.scenes
 */

/* @type {State} */
export const initialState = {
  activeScene: 'title',
  clock: [],
  gameStatus: 'UNINITIALISED',
  scenes: {
    id: 'XState definition for scenes',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'title',
    states: {
      about: {
        on: {
          navigateToTitle: {
            target: 'title'
          }
        }
      },
      level: {
      },
      'new-game': {
        on: {
          navigateToLevel: {
            target: 'level'
          },
          navigateToTitle: {
            target: 'title'
          }
        }
      },
      settings: {
        on: {
          navigateToTitle: {
            target: 'title'
          }
        }
      },
      title: {
        on: {
          navigateToAbout: {
            target: 'about'
          },
          navigateToNewGame: {
            target: 'new-game'
          },
          navigateToSettings: {
            target: 'settings'
          }
        }
      }
    }
  }
}
