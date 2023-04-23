import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { switchTheme } from '../../../../src/client/state/reducers/switch-theme.js'

describe('switchTheme', () => {
  it('should update the theme', () => {
    // Arrange
    const state = Object.assign({}, initialState, { theme: 'system' })
    const payload = { theme: 'light' }

    // Act
    const newState = switchTheme(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.theme).to.equal(payload.theme)
  })
})
