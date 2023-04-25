import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildPlayer } from '../../../src/client/components/player.js'

describe('buildPlayer', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const player = Object.assign({}, initialState.players[0])

    // Act
    const firstPlayer = buildPlayer(player, 0)

    // Assert
    expect(firstPlayer).to.be.an('Array').and.have.length(5)
  })

  it('should contain an avatar and nickname', () => {
    // Arrange
    const player = Object.assign({}, initialState.players[0])

    // Act
    const firstPlayer = buildPlayer(player)
    const [name, classList, attributes, text, children] = firstPlayer

    // Assert
    expect(name).to.equal('text')
    expect(classList).to.contain('player')
    expect(attributes).to.have.all.keys(['data-index', 'x', 'y'])
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(2)
  })
})
