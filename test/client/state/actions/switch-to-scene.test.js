import { expect } from 'chai'

import { SWITCH_TO_SCENE } from '../../../../src/constants.js'
import { switchToScene } from '../../../../src/client/state/actions/switch-to-scene.js'

describe('switchToScene', () => {
  it('should create an action', () => {
    // Arrange
    const scene = 'about'

    // Act
    const action = switchToScene(scene)

    // Assert
    expect(action.type).to.equal(SWITCH_TO_SCENE)
    expect(action.payload.scene).to.equal(scene)
  })
})
