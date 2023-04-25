import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import {
  findTurnsPerRound,
  getTransitionsForSceneFromState
} from '../../../src/client/state/utils.js'

describe('findTurnsPerRound', () => {
  describe('when no round is active', () => {
    it('should return an empty Array', () => {
      // Arrange
      const activeRound = null
      const state = Object.assign({}, initialState, { activeRound })

      // Act
      const turns = findTurnsPerRound(state, activeRound)

      // Assert
      expect(turns).to.be.an('Array').and.have.length(0)
    })
  })

  describe('when only one round is played', () => {
    it("should return that round's turns", () => {
      // Arrange
      const activeRound = 'sonic'
      const playedTurns = ['abcd']

      const state = Object.assign(
        {},
        initialState,
        {
          activeRound,
          rounds: {
            [activeRound]: {
              previousRound: null,
              round: 1,
              turns: playedTurns
            }
          }
        }
      )

      // Act
      const turns = findTurnsPerRound(state, activeRound)

      // Assert
      expect(turns).to.be.an('Array').and.have.length(1)
      expect(turns).to.contain(playedTurns)
    })
  })

  describe('when multiple rounds are played', () => {
    it("should return each round's turns", () => {
      // Arrange
      const activeRound = 'sonic'
      const playedTurns = ['abcd']

      const state = Object.assign(
        {},
        initialState,
        {
          activeRound,
          rounds: {
            [activeRound]: {
              previousRound: 'tails',
              round: 2,
              turns: playedTurns
            },
            tails: {
              previousRound: null,
              round: 1,
              turns: playedTurns
            }
          }
        }
      )

      // Act
      const turns = findTurnsPerRound(state, activeRound)

      // Assert
      expect(turns).to.be.an('Array').and.have.length(2)
      expect(turns).to.contain(playedTurns)
    })
  })
})

describe('getTransitionsForSceneFromState', () => {
  describe('when scene is unknown', () => {
    it('should return an empty Array', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const scene = 'unknown'

      // Act
      const transitions = getTransitionsForSceneFromState(state, scene)

      // Assert
      expect(transitions).to.have.length(0)
    })
  })

  describe('when scene is known', () => {
    describe('and transition events are not defined', () => {
      it('should return an empty Array', () => {
        // Arrange
        const state = Object.assign({}, initialState)
        const scene = 'unknown'

        // Act
        const transitions = getTransitionsForSceneFromState(state, scene)

        // Assert
        expect(transitions).to.have.length(0)
      })
    })

    describe('and transition events are defined', () => {
      it('should return an Array of Scenes', () => {
        // Arrange
        const state = Object.assign({}, initialState)
        const scene = 'title'

        // Act
        const transitions = getTransitionsForSceneFromState(state, scene)

        // Assert
        expect(transitions).to.have.length(3)
        expect(transitions).to.contain('about')
        expect(transitions).to.contain('settings')
        expect(transitions).to.contain('new-game')
      })
    })
  })
})
