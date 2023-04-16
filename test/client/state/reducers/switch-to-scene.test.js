import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { switchToScene } from '../../../../src/client/state/reducers/switch-to-scene.js'

describe('switchToScene', () => {
  describe('when new scene is valid', () => {
    it('should update the game status to INITIALISED', () => {
      // Arrange
      const state = Object.assign({}, initialState, { gameStatus: 'UNINITIALISED' })
      const payload = { scene: 'about' }

      // Act
      const newState = switchToScene(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.gameStatus).to.equal('INITIALISED')
    })

    it('should update the active scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { gameStatus: 'UNINITIALISED' })
      const payload = { scene: 'about' }

      // Act
      const newState = switchToScene(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.activeScene).to.equal(payload.scene)
    })
  })

  describe('when new scene is invalid', () => {
    it('should not update the game status', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const payload = { scene: 'invalid' }

      // Act
      const newState = switchToScene(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.gameStatus).to.equal(state.gameStatus)
    })

    it('should not update the scene', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const payload = { scene: 'invalid' }

      // Act
      const newState = switchToScene(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.activeScene).to.equal(state.activeScene)
    })
  })
})
