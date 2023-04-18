import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { levelSceneComponent } from '../../../../src/client/components/scenes/level.js'

chai.use(chaiDom)
const { expect } = chai

describe('levelSceneComponent', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

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

    it('should render the nicknames and an avatar for the players', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeScene: 'level',
          players: [
            ...initialState.players,
            { name: 'Mega', isBot: true }
          ]
        }
      )

      // Act
      const component = levelSceneComponent(document.body, state)

      // Assert
      // Standard is tripped up by Chai here
      // eslint-disable-next-line no-unused-expressions
      state.players.forEach((player, index) => {
        expect(component).to.have.descendant(`[data-index="${index}"] .avatar`)
        expect(component).to.have.descendant(`[data-index="${index}"] .nickname`).and.have.text(player.name)
      })
    })

    it('should render the world', () => {
      // Arrange
      const state = Object.assign(
        {},
        initialState,
        {
          activeScene: 'level',
          activeWorld: 'test',
          worlds: [{
            id: 'test',
            cubeLength: 1
          }]
        }
      )

      // Act
      const component = levelSceneComponent(document.body, state)

      // Assert
      expect(component).to.have.descendant('svg')
      expect(component).to.have.descendants('polygon').and.have.length(2)
    })

    it('should render links to transition to other scenes', () => {
      // Arrange
      const state = Object.assign({}, initialState, { activeScene: 'level' })

      // Act
      const component = levelSceneComponent(document.body, state)

      // Assert
      // At this point in time there are no transitions from the level
      // There will be win and game over scenes later
      expect(component).not.to.contain('a')
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
