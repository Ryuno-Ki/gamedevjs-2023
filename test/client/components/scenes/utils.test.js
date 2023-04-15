import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../../prepare.js'
import { mapTransitionsToLinks } from '../../../../src/client/components/scenes/utils.js'

chai.use(chaiDom)
const { expect } = chai

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
