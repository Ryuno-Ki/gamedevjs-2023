import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { settingsSceneComponent } from '../../../../src/client/components/scenes/settings.js'

chai.use(chaiDom)
const { expect } = chai

describe('settingsSceneComponent', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

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

    it('should render the theme switcher', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'settings' })

      // Act
      const component = settingsSceneComponent(document.body, state)

      // Assert
      expect(component).to.have.descendant('fieldset')
      expect(component).to.have.descendant('select')
      expect(component).to.have.descendants('option').and.have.length(3)
      expect(component).to.descendant('option[value="system"]').and.have.attribute('selected', 'selected')
    })

    it('should render links to transition to other scenes', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'settings' })

      // Act
      const component = settingsSceneComponent(document.body, state)

      // Assert
      expect(component).to.contain('a')
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
