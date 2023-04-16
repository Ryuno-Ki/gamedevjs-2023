import { expect } from 'chai'

import { SET_NICKNAME } from '../../../../src/constants.js'
import { setNickname } from '../../../../src/client/state/actions/set-nickname.js'

describe('setNickname', () => {
  it('should create an action', () => {
    // Arrange
    const index = 1
    const nickname = 'Mega'

    // Act
    const action = setNickname(index, nickname)

    // Assert
    expect(action.type).to.equal(SET_NICKNAME)
    expect(action.payload.index).to.equal(index)
    expect(action.payload.nickname).to.equal(nickname)
  })
})
