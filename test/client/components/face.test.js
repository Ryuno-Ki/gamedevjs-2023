import { expect } from 'chai'

import { buildFace } from '../../../src/client/components/face.js'

describe('face', () => {
  describe('left', () => {
    it('should produce a data structure that can be consumed by svg', () => {
      // Arrange
      const points = []
      const direction = 'left'

      // Act
      const face = buildFace(points, direction)

      // Assert
      expect(face).to.be.an('Array').and.have.length(3)
    })

    it('should have a single face', () => {
      // Arrange
      const points = []
      const direction = 'left'

      // Act
      const face = buildFace(points, direction)
      const [name, classList, attributes] = face

      // Assert
      expect(name).to.equal('polygon')
      expect(classList).to.contain(direction)
      expect(classList).to.contain('face')
      expect(attributes).to.have.key('points')
    })
  })

  describe('right', () => {
    it('should produce a data structure that can be consumed by svg', () => {
      // Arrange
      const points = []
      const direction = 'right'

      // Act
      const face = buildFace(points, direction)

      // Assert
      expect(face).to.be.an('Array').and.have.length(3)
    })

    it('should have a single face', () => {
      // Arrange
      const points = []
      const direction = 'right'

      // Act
      const face = buildFace(points, direction)
      const [name, classList, attributes] = face

      // Assert
      expect(name).to.equal('polygon')
      expect(classList).to.contain(direction)
      expect(classList).to.contain('face')
      expect(attributes).to.have.key('points')
    })
  })

  describe('top', () => {
    it('should produce a data structure that can be consumed by svg', () => {
      // Arrange
      const points = []
      const direction = 'top'

      // Act
      const face = buildFace(points, direction)

      // Assert
      expect(face).to.be.an('Array').and.have.length(3)
    })

    it('should have a single face', () => {
      // Arrange
      const points = []
      const direction = 'top'

      // Act
      const face = buildFace(points, direction)
      const [name, classList, attributes] = face

      // Assert
      expect(name).to.equal('polygon')
      expect(classList).to.contain(direction)
      expect(classList).to.contain('face')
      expect(attributes).to.have.key('points')
    })
  })
})
