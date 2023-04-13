import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { tick } from '../../../../src/client/state/reducers/tick.js'

describe('tick', () => {
  describe('when game is running', () => {
    it('should add a new timestamp to the clock', () => {
      // Arrange
      const state = Object.assign({}, initialState, { gameStatus: 'RUNNING' })
      const payload = { time: 42 }

      // Act
      const newState = tick(state, payload)

      // Assert
      expect(newState).to.not.equal(state)
      expect(newState).to.not.deep.equal(state)
      expect(newState.clock).to.contain(payload.time)
    })
  })

  describe('when game is not running', () => {
    it('should not change the state', () => {
      // Arrange
      const state = Object.assign({}, initialState, { gameStatus: 'UNINITIALISED' })
      const payload = { time: 42 }

      // Act
      const newState = tick(state, payload)

      // Assert
      expect(newState).to.not.equal(state)
      expect(newState).to.deep.equal(state)
    })
  })
})
