import chai from 'chai'
import chaiAlmost from 'chai-almost'

import { initialState } from '../../../src/client/state/initial.js'
import {
  buildRightFields,
  computeRightFieldPoints
} from '../../../src/client/components/right-field.js'

chai.use(chaiAlmost(0.01))
const { expect } = chai

describe('buildRightFields', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const rightFields = buildRightFields(world)

    // Assert
    expect(rightFields).to.be.an('Array').and.have.length(5)
  })

  it('should have child components equal to number of players', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const rightFields = buildRightFields(world)
    const [name, classList, attributes, text, children] = rightFields

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('right')
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

describe('computeRightFieldPoints', () => {
  it('should compute the right number of faces', () => {
    // Arrange
    const world = Object.assign(
      {},
      initialState.worlds[0],
      {
        facesPerColumn: 2,
        facesPerRow: 3
      }
    )

    // Act
    const points = computeRightFieldPoints(world)

    // Assert
    expect(points).to.be.an('Array').and.have.length(world.facesPerColumn * world.facesPerRow)
  })

  it('should compute the points for a single face per field', () => {
    // Arrange
    const world = Object.assign(
      {},
      initialState.worlds[0],
      {
        cubelength: 30,
        facesPerColumn: 1,
        facesPerRow: 1
      }
    )

    // Act
    const [points] = computeRightFieldPoints(world)
    const [bottomLeft, topLeft, topRight, bottomRight] = points

    // Assert
    expect(points).to.be.an('Array').and.have.length(4)
    expect(bottomLeft).to.deep.equal([50, 72.5])
    expect(topLeft).to.deep.equal([50, 42.5])
    expect(topRight).to.deep.almost([75.98, 27.5])
    expect(bottomRight).to.deep.almost([75.98, 57.5])
  })
})
