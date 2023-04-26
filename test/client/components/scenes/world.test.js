import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { worldSceneComponent } from '../../../../src/client/components/scenes/world.js'

chai.use(chaiDom)
const { expect } = chai

describe('worldSceneComponent', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

  describe('when world scene is active', () => {
    it('should render the world scene', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'world' })

      // Act
      const component = worldSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).not.to.be.empty
    })

    it('should render links to transition to other scenes', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'world' })

      // Act
      const component = worldSceneComponent(document.body, state)

      // Assert
      expect(component).to.contain('a')
    })
  })

  describe('when world scene is not active', () => {
    it('should render an empty element', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'title' })

      // Act
      const component = worldSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      expect(component.innerHTML).to.be.empty
    })
  })
})
