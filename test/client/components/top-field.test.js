import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildTopFields } from '../../../src/client/components/top-field.js'

describe('buildTopFields', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const topFields = buildTopFields(world)

    // Assert
    expect(topFields).to.be.an('Array').and.have.length(5)
  })

  it('should have child components equal to number of players', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const topFields = buildTopFields(world)
    const [name, classList, attributes, text, children] = topFields

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('top')
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
