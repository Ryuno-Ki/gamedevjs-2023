import { expect } from 'chai'

import { TICK } from '../../../../src/constants.js'
import { tick } from '../../../../src/client/state/actions/tick.js'

describe('tick', () => {
  it('should create an action', () => {
    // Arrange
    const time = 42

    // Act
    const action = tick(time)

    // Assert
    expect(action.type).to.equal(TICK)
    expect(action.payload.time).to.equal(time)
  })
})
