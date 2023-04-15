import { expect } from 'chai'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { titleSceneComponent } from '../../../../src/client/components/scenes/title.js'

describe('titleSceneComponent', () => {
  describe('when title scene is active', () => {
    it('should render the title scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = titleSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })
  })

  describe('when title scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'settings' })

      // Act
      const component = titleSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})