import { expect } from 'chai'

import { SELECT_WORLD } from '../../../../src/constants.js'
import { selectWorld } from '../../../../src/client/state/actions/select-world.js'

describe('selectWorld', () => {
  it('should create an action', () => {
    // Arrange
    const worldId = '1234'

    // Act
    const action = selectWorld(worldId)

    // Assert
    expect(action).to.have.keys(['type', 'payload'])
    expect(action.type).to.equal(SELECT_WORLD)
    expect(action.payload.worldId).to.equal(worldId)
  })
})
