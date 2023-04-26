import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import {
  evaluateTurns,
  findTurnsPerRound,
  getTransitionsForSceneFromState,
  hasGameFinished
} from '../../../src/client/state/utils.js'

describe('evaluateTurns', () => {
  describe('on the first round before any turns', () => {
    it('should return an empty Array', () => {
      // Arrange
      const turns = [[]]

      // Act
      const votesPerRound = evaluateTurns(turns, 3)

      // Assert
      expect(votesPerRound).to.be.an('Array').and.have.length(0)
    })
  })

  describe('on the first round before all turns', () => {
    it('should return an empty Array', () => {
      // Arrange
      const turns = [['abcd']]

      // Act
      const votesPerRound = evaluateTurns(turns, 3)

      // Assert
      expect(votesPerRound).to.be.an('Array').and.have.length(0)
    })
  })

  describe("on ties (no turn with more than half the players' vote)", () => {
    it('should return an Array of empty string', () => {
      // Arrange
      const turns = [['abcd', 'efgh', 'ijkl']]

      // Act
      const votesPerRound = evaluateTurns(turns, 3)

      // Assert
      expect(votesPerRound).to.be.an('Array').and.have.length(0)
    })
  })

  describe("on majority (more than half the players' vote)", () => {
    it('should return an Array of that vote', () => {
      // Arrange
      const turns = [['abcd', 'efgh', 'abcd']]

      // Act
      const votesPerRound = evaluateTurns(turns, 3)

      // Assert
      expect(votesPerRound).to.be.an('Array').and.have.length(1)
      expect(votesPerRound).to.contain('abcd')
    })
  })
})

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

describe('hasGameFinished', () => {
  describe('when there is no world', () => {
    it('should return false', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeWorld: 'invalid' })

      // Act
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.false
    })
  })

  describe('when there is no active round', () => {
    it('should return false', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeRound: null })

      // Act
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.false
    })
  })

  describe('when there is no world', () => {
    it('should return false', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeWorld: 'invalid' })

      // Act
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.false
    })
  })

  describe('when there are not enough rounds', () => {
    it('should return false', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeRound: 'sonic',
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
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.false
    })
  })

  describe('when there are not enough turns in the last round', () => {
    it('should return false', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeRound: 'sonic',
          players: [{
            name: 'Mega',
            isBot: false
          }, {
            name: 'Man',
            isBot: true
          }],
          rounds: {
            tails: {
              previousRound: null,
              round: 1,
              turns: ['abcd', 'efgh']
            },
            sonic: {
              previousRound: 'tails',
              round: 2,
              turns: []
            }
          }
        }
      )

      // Act
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.false
    })
  })

  describe('when the last turn was made in the last round', () => {
    it('should return true', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeRound: 'sonic',
          activeWorld: 'greenhill',
          players: [{
            name: 'Mega',
            isBot: false
          }, {
            name: 'Man',
            isBot: true
          }],
          rounds: {
            tails: {
              previousRound: null,
              round: 1,
              turns: ['abcd', 'efgh']
            },
            sonic: {
              previousRound: 'tails',
              round: 2,
              turns: ['abcd', 'efgh']
            }
          },
          worlds: [{
            id: 'greenhill',
            cubeLength: 1,
            facesPerColumn: 1,
            facesPerRow: 1,
            solution: ['abcd', 'efgh']
          }]
        }
      )

      // Act
      const isGameFinished = hasGameFinished(state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(isGameFinished).to.be.true
    })
  })
})
