import { expect } from 'chai'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { settingsSceneComponent } from '../../../../src/client/components/scenes/settings.js'

describe('settingsSceneComponent', () => {
  describe('when settings scene is active', () => {
    it('should render the settings scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'settings' })

      // Act
      const component = settingsSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })
  })

  describe('when settings scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = settingsSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})
