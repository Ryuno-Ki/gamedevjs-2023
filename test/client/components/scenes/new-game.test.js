import { expect } from 'chai'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { newGameSceneComponent } from '../../../../src/client/components/scenes/new-game.js'

describe('newGameSceneComponent', () => {
  describe('when new-game scene is active', () => {
    it('should render the new-game scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'new-game' })

      // Act
      const component = newGameSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })
  })

  describe('when new-game scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = newGameSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})
