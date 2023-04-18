import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import {
  mapDegToRadians,
  mapTransitionsToLinks
} from '../../../../src/client/components/scenes/utils.js'

chai.use(chaiDom)
const { expect } = chai

describe('mapDegToRadians', () => {
  it('should convert degrees to radians', () => {
    // Arrange
    const degrees = [
      [0, 0],
      [30, Math.PI / 6],
      [45, Math.PI / 4],
      [60, Math.PI / 3],
      [90, Math.PI / 2]
    ]

    // Act
    const radians = degrees.map((degree) => mapDegToRadians(degree[0]))

    // Assert
    radians.forEach((radian, index) => {
      expect(radian).to.equal(degrees[index][1])
    })
  })
})

describe('mapTransitionsToLinks', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

  it('should wrap each transition as link', () => {
    // Arrange
    const transitions = ['about', 'settings']

    // Act
    const links = mapTransitionsToLinks(transitions)

    // Assert
    expect(links).to.have.length(transitions.length)
    links.forEach((link) => {
      expect(link).to.have.tagName('a')
      expect(link).to.have.attribute('href')
    })
  })
})
