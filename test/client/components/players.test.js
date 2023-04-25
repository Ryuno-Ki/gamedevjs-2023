import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildPlayers } from '../../../src/client/components/players.js'

describe('buildPlayers', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const state = Object.assign({}, initialState)

    // Act
    const players = buildPlayers(state)

    // Assert
    expect(players).to.be.an('Array').and.have.length(5)
  })

  it('should have child components equal to number of players', () => {
    // Arrange
    const state = Object.assign({}, initialState)

    // Act
    const players = buildPlayers(state)
    const [name, classList, attributes, text, children] = players

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('players')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(attributes).to.not.have.any.keys
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(state.players.length)
  })
})
