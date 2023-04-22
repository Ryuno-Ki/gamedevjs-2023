import { expect } from 'chai'

import { buildHeadline } from '../../../src/client/components/headline.js'

describe('buildHeadline', () => {
  it('should produce a data structure that can be consumed by el', () => {
    // Arrange
    const heading = 'Gameover'

    // Act
    const headline = buildHeadline(heading)

    // Assert
    expect(headline).to.be.an('Array').and.have.length(4)
  })

  it('should contain a h1', () => {
    // Arrange
    const heading = 'Gameover'

    // Act
    const headline = buildHeadline(heading)
    const [name, classList, attributes, text] = headline

    // Assert
    expect(name).to.equal('h1')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(classList).to.be.empty
    expect(attributes).to.not.have.any.keys('')
    expect(text).to.be.equal(heading)
  })
})
