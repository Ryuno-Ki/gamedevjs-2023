import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { setIsBot } from '../../../../src/client/state/reducers/set-is-bot.js'

describe('setIsBot', () => {
  it('should update the state with the new isBot flag', () => {
    // Arrange
    const state = Object.assign({}, initialState)
    const payload = { index: 1, isBot: true }

    // Act
    const newState = setIsBot(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    newState.players.forEach((player, idx) => {
      if (idx === payload.index) {
        expect(player.isBot).to.equal(payload.isBot)
      } else {
        expect(player.isBot).to.equal(state.players[idx].isBot)
      }
    })
  })
})
