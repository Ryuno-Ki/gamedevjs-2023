import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { getTransitionsForSceneFromState } from '../../../src/client/state/utils.js'

describe('getTransitionsForSceneFromState', () => {
  describe('when scene is unknown', () => {
    it('should return an empty Array', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const scene = 'unknown'

      // Act
      const transitions = getTransitionsForSceneFromState(state, scene)

      // Assert
      expect(transitions).to.have.length(0)
    })
  })

  describe('when scene is known', () => {
    describe('and transition events are not defined', () => {
      it('should return an empty Array', () => {
        // Arrange
        const state = Object.assign({}, initialState)
        const scene = 'level'

        // Act
        const transitions = getTransitionsForSceneFromState(state, scene)

        // Assert
        expect(transitions).to.have.length(0)
      })
    })

    describe('and transition events are defined', () => {
      it('should return an Array of Scenes', () => {
        // Arrange
        const state = Object.assign({}, initialState)
        const scene = 'title'

        // Act
        const transitions = getTransitionsForSceneFromState(state, scene)

        // Assert
        expect(transitions).to.have.length(3)
        expect(transitions).to.contain('about')
        expect(transitions).to.contain('settings')
        expect(transitions).to.contain('new-game')
      })
    })
  })
})
