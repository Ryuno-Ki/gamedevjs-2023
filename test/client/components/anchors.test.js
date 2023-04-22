import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildAnchors } from '../../../src/client/components/anchors.js'

describe('buildAnchors', () => {
  it('should produce a data structure that can be consumed by el', () => {
    // Arrange
    const scene = 'title'
    const state = Object.assign({}, initialState)

    // Act
    const anchors = buildAnchors(state, scene)

    // Assert
    expect(anchors).to.be.an('Array').and.have.length(5)
  })

  it('should contain a div wrapper around a elements', () => {
    // Arrange
    const scene = 'about'
    const state = Object.assign({}, initialState)

    // Act
    const anchors = buildAnchors(state, scene)
    const [wrapper, classList, attributes, text, children] = anchors

    // Assert
    expect(wrapper).to.equal('div')
    expect(classList).to.contain('actions')
    expect(attributes).to.not.have.any.keys('')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(1)
  })
})
