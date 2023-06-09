import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { checkForGameover } from '../../../../src/client/state/reducers/check-for-gameover.js'

describe('checkForGameover', () => {
  describe('when no round is active', () => {
    it('should leave the active scene untouched', () => {
      // Arrange
      const activeScene = 'level'
      const state = Object.assign({}, initialState, { activeRound: null, activeScene })
      const payload = {}

      // Act
      const newState = checkForGameover(state, payload)

      // Assert
      expect(newState.activeScene).to.equal(activeScene)
    })
  })

  describe('when no world is active', () => {
    it('should leave the active scene untouched', () => {
      // Arrange
      const activeScene = 'level'
      const state = Object.assign({}, initialState, { activeScene, activeWorld: 'unknown' })
      const payload = {}

      // Act
      const newState = checkForGameover(state, payload)

      // Assert
      expect(newState.activeScene).to.equal(activeScene)
    })
  })

  describe('when no round is found', () => {
    it('should leave the active scene untouched', () => {
      // Arrange
      const activeScene = 'level'
      const state = Object.assign({}, initialState, { activeScene, rounds: {} })
      const payload = {}

      // Act
      const newState = checkForGameover(state, payload)

      // Assert
      expect(newState.activeScene).to.equal(activeScene)
    })
  })

  describe('when a round is found', () => {
    describe('but it does not match the length of the world solution', () => {
      it('should leave the active scene untouched', () => {
        // Arrange
        const activeScene = 'level'
        const payload = {}
        const state = Object.assign(
          {},
          initialState,
          {
            activeRound: 'sonic',
            activeScene,
            rounds: {
              sonic: {
                previousRound: null,
                round: 1,
                turns: []
              }
            }
          }
        )

        // Act
        const newState = checkForGameover(state, payload)

        // Assert
        expect(newState.activeScene).to.equal(activeScene)
      })
    })

    describe('but it has no turns', () => {
      it('should leave the active scene untouched', () => {
        // Arrange
        const activeScene = 'level'
        const activeWorld = 'greenhill'
        const payload = {}
        const state = Object.assign(
          {},
          initialState,
          {
            activeRound: 'sonic',
            activeScene,
            activeWorld,
            rounds: {
              amy: {
                previousRound: null,
                round: 1,
                turns: ['1234', '2345', '3456']
              },
              knuckles: {
                previousRound: 'amy',
                round: 2,
                turns: ['1234', '2345', '3456']
              },
              tails: {
                previousRound: 'knuckles',
                round: 3,
                turns: ['1234', '2345', '3456']
              },
              sonic: {
                previousRound: 'tails',
                round: 4,
                turns: []
              }
            },
            worlds: [{
              id: activeWorld,
              cubeLength: 1,
              facesPerColumn: 1,
              facesPerRow: 1,
              solution: ['1234', '5678', '2345', '3456']
            }]
          }
        )

        // Act
        const newState = checkForGameover(state, payload)

        // Assert
        expect(newState.activeScene).to.equal(activeScene)
      })
    })

    describe('when it is the final turn', () => {
      describe('but it does not match the solution', () => {
        it('should move to the gameover scene', () => {
          // Arrange
          const activeScene = 'level'
          const activeWorld = 'greenhill'
          const payload = {}
          const state = Object.assign(
            {},
            initialState,
            {
              activeRound: 'sonic',
              activeScene,
              activeWorld,
              rounds: {
                sonic: {
                  previousRound: 'tails',
                  round: 2,
                  turns: ['1234', '6789', '5678']
                },
                tails: {
                  previousRound: null,
                  round: 1,
                  turns: ['1234', '1234', '5678']
                }
              },
              worlds: [{
                id: activeWorld,
                cubeLength: 1,
                facesPerColumn: 1,
                facesPerRow: 1,
                solution: ['1234', '5678']
              }]
            }
          )

          // Act
          const newState = checkForGameover(state, payload)

          // Assert
          expect(newState.activeScene).to.equal('gameover')
        })
      })
    })
  })
})
