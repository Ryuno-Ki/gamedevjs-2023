import { expect } from 'chai'

import { initialState } from '../../../../src/client/state/initial.js'
import { setUseOpenMoji } from '../../../../src/client/state/reducers/set-use-open-moji.js'

describe('setUseOpenMoji', () => {
  it('should update the state with the new isBot flag', () => {
    // Arrange
    const state = Object.assign({}, initialState)
    const payload = { useOpenMoji: false }

    // Act
    const newState = setUseOpenMoji(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.useOpenMoji).to.equal(payload.useOpenMoji)
  })
})
