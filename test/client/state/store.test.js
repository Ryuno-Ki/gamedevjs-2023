import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import singletonStore, { Store } from '../../../src/client/state/store.js'

describe('Store', () => {
  it('should instantiate', () => {
    // Arrange
    const reducer = function (state, action) { return state }

    // Act
    const store = new Store(reducer)

    // Assert
    expect(store).to.be.an.instanceof(Store)
  })

  describe('dispatch', () => {
    it('should update the state', async () => {
      // Arrange
      const action = { type: 'TICK', payload: { time: 42 } }
      const oldState = singletonStore.getState()

      // Act
      await singletonStore.dispatch(action)
      const newState = singletonStore.getState()

      // Assert
      expect(newState).not.to.equal(oldState)
    })
  })

  describe('getState', () => {
    it('should return the current snapshot of the state', () => {
      // Arrange
      // Nothing to prepare

      // Act
      const newState = singletonStore.getState()

      // Assert
      expect(newState).to.deep.equal(initialState)
    })
  })
})
