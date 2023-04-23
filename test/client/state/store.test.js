import { expect } from 'chai'

import { switchToScene } from '../../../src/client/state/actions/switch-to-scene.js'
import { switchTheme } from '../../../src/client/state/actions/switch-theme.js'
import { tick } from '../../../src/client/state/actions/tick.js'
import { initialState } from '../../../src/client/state/initial.js'
import singletonStore, { Store } from '../../../src/client/state/store.js'
import { document } from '../../prepare.js'

describe('Store', () => {
  beforeEach(async () => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

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
      const action = tick(42)
      const oldState = singletonStore.getState()

      // Act
      await singletonStore.dispatch(action)
      const newState = singletonStore.getState()

      // Assert
      expect(newState).not.to.equal(oldState)
    })

    it('should update the <title> on scene changes', async () => {
      // Arrange
      const action = switchToScene('title')
      const oldState = singletonStore.getState()

      // Act
      await singletonStore.dispatch(action)
      const newState = singletonStore.getState()

      // Assert
      expect(newState).not.to.equal(oldState)
      expect(document.title).to.contain(action.payload.scene)
    })

    it('should update the document.body on theme changes', async () => {
      // Arrange
      const action = switchTheme('dark')
      const oldState = singletonStore.getState()

      // Act
      await singletonStore.dispatch(action)
      const newState = singletonStore.getState()

      // Assert
      expect(newState).not.to.equal(oldState)
      expect(document.body).to.have.class('theme-dark')
      expect(document.body).not.to.have.class('theme-light')
      expect(document.body).not.to.have.class('theme-system')
    })
  })

  describe('getState', () => {
    it('should return the current snapshot of the state', () => {
      // Arrange
      // I can't use the singleton store here because other tests will affect it
      const reducer = function (state = initialState, action) { return state }
      const store = new Store(reducer)

      // Act
      const newState = store.getState()

      // Assert
      expect(newState).to.deep.equal(initialState)
    })
  })
})
