import { expect } from 'chai'

import { SWITCH_THEME } from '../../../../src/constants.js'
import { switchTheme } from '../../../../src/client/state/actions/switch-theme.js'

describe('switchTheme', () => {
  it('should create an action', () => {
    // Arrange
    const theme = 'dark'

    // Act
    const action = switchTheme(theme)

    // Assert
    expect(action.type).to.equal(SWITCH_THEME)
    expect(action.payload.theme).to.equal(theme)
  })
})
