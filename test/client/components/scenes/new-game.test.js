import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { newGameSceneComponent } from '../../../../src/client/components/scenes/new-game.js'

chai.use(chaiDom)
const { expect } = chai

describe('newGameSceneComponent', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

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

    it('should render a fieldset for each player', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'new-game' })

      // Act
      const component = newGameSceneComponent(document.body, state)

      // Assert
      expect(component).to.have.descendants('fieldset').and.have.length(state.players.length)
      expect(component).to.have.descendants('legend').and.have.length(state.players.length)
      expect(component).to.have.descendants('label').and.have.length(state.players.length * 3)
      expect(component).to.have.descendants('input[type="text"]').and.have.length(state.players.length)
      expect(component).to.have.descendants('input[type="radio"]').and.have.length(state.players.length * 2)
    })

    it('should render links to transition to other scenes', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'new-game' })

      // Act
      const component = newGameSceneComponent(document.body, state)

      // Assert
      expect(component).to.contain('a')
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
