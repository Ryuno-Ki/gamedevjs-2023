import { expect } from 'chai'

import { SELECT_EMOJI } from '../../../../src/constants.js'
import { selectEmoji } from '../../../../src/client/state/actions/select-emoji.js'

describe('selectEmoji', () => {
  it('should create an action', () => {
    // Arrange
    const emoji = '1234'

    // Act
    const action = selectEmoji(emoji)

    // Assert
    expect(action).to.have.keys(['type', 'payload'])
    expect(action.type).to.equal(SELECT_EMOJI)
    expect(action.payload.emoji).to.equal(emoji)
  })
})
