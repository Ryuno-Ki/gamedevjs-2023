import { expect } from 'chai'

import {
  SET_NICKNAME,
  SWITCH_TO_SCENE,
  TICK
} from '../../../../src/constants.js'
import { initialState } from '../../../../src/client/state/initial.js'
import { reducer } from '../../../../src/client/state/reducers/index.js'

describe('reducer', () => {
  describe('when run for the first time', () => {
    it('should return the initial state', () => {
      // Arrange
      const state = undefined
      const action = { type: "DOESN'T MATTER", payload: null }

      // Act
      const newState = reducer(state, action)

      // Assert
      expect(newState).to.equal(initialState)
    })
  })

  describe('when invoked with an unsupported action type', () => {
    it('should return an untouched state', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const action = { type: "DOESN'T MATTER", payload: null }

      // Act
      const newState = reducer(state, action)

      // Assert
      expect(newState).to.equal(state)
    })
  })

  describe('when invoked with SET_NICKNAME action', () => {
    it('should update the state', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const action = { type: SET_NICKNAME, payload: { index: 2, nickname: 'Mega' } }

      // Act
      const newState = reducer(state, action)

      // Assert
      expect(newState).to.not.equal(state)
    })
  })

  describe('when invoked with SWITCH_TO_SCENE action', () => {
    it('should update the state', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const action = { type: SWITCH_TO_SCENE, payload: { scene: 'about' } }

      // Act
      const newState = reducer(state, action)

      // Assert
      expect(newState).to.not.equal(state)
    })
  })

  describe('when invoked with TICK action', () => {
    it('should update the state', () => {
      // Arrange
      const state = Object.assign({}, initialState)
      const action = { type: TICK, payload: { time: 42 } }

      // Act
      const newState = reducer(state, action)

      // Assert
      expect(newState).to.not.equal(state)
    })
  })
})
