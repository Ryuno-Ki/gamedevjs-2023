import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildLeftFields } from '../../../src/client/components/left-field.js'

describe('buildLeftFields', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const leftFields = buildLeftFields(world)

    // Assert
    expect(leftFields).to.be.an('Array').and.have.length(5)
  })

  it('should have child components equal to number of players', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const leftFields = buildLeftFields(world)
    const [name, classList, attributes, text, children] = leftFields

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('left')
    expect(classList).to.contain('faces')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(attributes).to.not.have.any.keys
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(1)
  })
})
