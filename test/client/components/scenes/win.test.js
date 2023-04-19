import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { winSceneComponent } from '../../../../src/client/components/scenes/win.js'

chai.use(chaiDom)
const { expect } = chai

describe('winSceneComponent', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

  describe('when win scene is active', () => {
    it('should render the win scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'win' })

      // Act
      const component = winSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })

    it('should render links to transition to other scenes', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'win' })

      // Act
      const component = winSceneComponent(document.body, state)

      // Assert
      expect(component).to.contain('a')
    })
  })

  describe('when win scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = winSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})
