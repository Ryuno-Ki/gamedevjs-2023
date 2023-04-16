import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { setNickname } from '../../../../src/client/state/reducers/set-nickname.js'

describe('setNickname', () => {
  it('should update the state with the new nickname', () => {
    // Arrange
    const state = Object.assign({}, initialState)
    const payload = { index: 1, nickname: 'Mega' }

    // Act
    const newState = setNickname(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    newState.players.forEach((player, idx) => {
      if (idx === payload.index) {
        expect(player.nickname).to.equal(payload.nickname)
      } else {
        expect(player.nickname).to.equal(state.players[idx].nickname)
      }
    })
  })
})
