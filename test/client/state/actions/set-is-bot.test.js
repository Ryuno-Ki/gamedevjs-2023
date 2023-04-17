import { expect } from 'chai'

import { SET_IS_BOT } from '../../../../src/constants.js'
import { setIsBot } from '../../../../src/client/state/actions/set-is-bot.js'

describe('setIsBot', () => {
  it('should create an action', () => {
    // Arrange
    const index = 1
    const isBot = true

    // Act
    const action = setIsBot(index, isBot)

    // Assert
    expect(action.type).to.equal(SET_IS_BOT)
    expect(action.payload.index).to.equal(index)
    expect(action.payload.isBot).to.equal(isBot)
  })
})
