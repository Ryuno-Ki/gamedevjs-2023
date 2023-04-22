import { expect } from 'chai'

import { CHECK_FOR_WIN } from '../../../../src/constants.js'
import { checkForWin } from '../../../../src/client/state/actions/check-for-win.js'

describe('checkForWin', () => {
  it('should create an action', () => {
    // Arrange
    // Nothing to prepare

    // Act
    const action = checkForWin()

    // Assert
    expect(action).to.have.keys(['type', 'payload'])
    expect(action.type).to.equal(CHECK_FOR_WIN)
  })
})
