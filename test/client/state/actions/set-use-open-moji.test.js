import { expect } from 'chai'

import { SET_USE_OPEN_MOJI } from '../../../../src/constants.js'
import { setUseOpenMoji } from '../../../../src/client/state/actions/set-use-open-moji.js'

describe('setUseOpenMoji', () => {
  it('should create an action', () => {
    // Arrange
    const useOpenMoji = false

    // Act
    const action = setUseOpenMoji(useOpenMoji)

    // Assert
    expect(action.type).to.equal(SET_USE_OPEN_MOJI)
    expect(action.payload.useOpenMoji).to.equal(useOpenMoji)
  })
})
