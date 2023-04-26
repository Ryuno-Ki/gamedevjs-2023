import chai from 'chai'
import chaiDom from 'chai-dom'

import { document } from '../../prepare.js'
import { initialState } from '../../../src/client/state/initial.js'
import { buildField } from '../../../src/client/components/field.js'

chai.use(chaiDom)
const { expect } = chai

describe('buildField', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

  it('should build the SVG representing the field', () => {
    // Arrange
    const state = Object.assign({}, initialState)

    // Act
    const field = buildField(state)

    // Assert
    expect(field).to.have.tagName('svg')
  })

  it('should have players', () => {
    // Arrange
    const [world] = initialState.worlds
    const state = Object.assign({}, initialState, { activeWorld: world.id })

    // Act
    const field = buildField(state)

    // Assert
    expect(field).to.have.descendant('g.players')
  })

  it('should have three fields composed of faces', () => {
    // Arrange
    const [world] = initialState.worlds
    const state = Object.assign({}, initialState, { activeWorld: world.id })

    // Act
    const field = buildField(state)

    // Assert
    expect(field).to.have.descendant('g.left.faces')
    expect(field).to.have.descendant('g.right.faces')
    expect(field).to.have.descendant('g.top.faces')
  })
})
