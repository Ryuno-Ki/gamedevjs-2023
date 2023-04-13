import { expect } from 'chai'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { levelSceneComponent } from '../../../../src/client/components/scenes/level.js'

describe('levelSceneComponent', () => {
  describe('when level scene is active', () => {
    it('should render the level scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'level' })

      // Act
      const component = levelSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })
  })

  describe('when level scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = levelSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})
