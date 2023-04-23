import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { selectEmoji } from '../../../../src/client/state/reducers/select-emoji.js'

describe('selectEmoji', () => {
  it('should update the round with a new turn', () => {
    // Arrange
    const state = Object.assign(
      {},
      initialState,
      {
        activeRound: 'greenhill',
        rounds: {
          greenhill: {
            previousRound: null,
            round: 1,
            turns: []
          }
        }
      }
    )
    const payload = { emoji: '1234' }

    // Act
    const newState = selectEmoji(state, payload)

    // Assert
    expect(newState).not.to.equal(state)

    const round = newState.rounds[newState.activeRound]
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(round).to.exist

    expect(round.turns).to.contain(payload.emoji)
  })

  describe('when every player made their turn', () => {
    it('should create a new round', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeRound: 'greenhill',
          rounds: {
            greenhill: {
              previousRound: null,
              round: 1,
              turns: ['1234', '5678']
            }
          }
        }
      )
      const payload = { emoji: '1234' }

      // Act
      const newState = selectEmoji(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.activeRound).not.to.equal(state.activeRound)
      expect(Object.keys(newState.rounds)).to.not.deep.equal(Object.keys(state.rounds))
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(newState.rounds[newState.activeRound]).to.exist
      expect(newState.rounds[newState.activeRound].previousRound).to.equal(state.activeRound)
      expect(newState.rounds[newState.activeRound].round).to.equal(1 + state.rounds[state.activeRound].round)
      expect(newState.rounds[newState.activeRound].turns).to.have.length(0)
    })
  })
})
