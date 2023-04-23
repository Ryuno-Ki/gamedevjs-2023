import { expect } from 'chai'

import { CHECK_FOR_GAMEOVER } from '../../../../src/constants.js'
import { checkForGameover } from '../../../../src/client/state/actions/check-for-gameover.js'

describe('checkForGameover', () => {
  it('should create an action', () => {
    // Arrange
    // Nothing to prepare

    // Act
    const action = checkForGameover()

    // Assert
    expect(action).to.have.keys(['type', 'payload'])
    expect(action.type).to.equal(CHECK_FOR_GAMEOVER)
  })
})
