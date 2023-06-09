/** @typedef {import('../../components/scenes/index').Scene} Scene} */

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
export const scenes = {
  id: 'XState definition for scenes',
  predictableActionArguments: true,
  preserveActionOrder: true,
  // TODO: Think about loading a game here: initial state matches activeScene
  initial: 'title',
  states: {
    about: {
      on: {
        navigateToTitle: {
          target: 'title'
        }
      }
    },
    gameover: {
      on: {
        navigateToTitle: {
          target: 'title'
        }
      }
    },
    level: {
      on: {
        navigateToGameover: {
          target: 'gameover'
        },
        navigateToWin: {
          target: 'win'
        }
      }
    },
    'new-game': {
      on: {
        navigateToWorld: {
          target: 'world'
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
    },
    win: {
      on: {
        navigateToTitle: {
          target: 'title'
        }
      }
    },
    world: {
      on: {
        navigateToLevel: {
          target: 'level'
        }
      }
    }
  }
}
