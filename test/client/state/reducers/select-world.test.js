import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { selectWorld } from '../../../../src/client/state/reducers/select-world.js'

describe('selectWorld', () => {
  it('should update the active world', () => {
    // Arrange
    const state = Object.assign({}, initialState, { activeWorld: 'greenhill' })
    const payload = { worldId: '1234' }

    // Act
    const newState = selectWorld(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeWorld).to.equal(payload.worldId)
  })
})
