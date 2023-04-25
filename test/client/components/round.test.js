import { expect } from 'chai'

import { initialState } from '../../../src/client/state/initial.js'
import { buildRound } from '../../../src/client/components/round.js'

describe('buildRound', () => {
  it('should produce a data structure that can be consumed by el', () => {
    // Arrange
    const state = Object.assign({}, initialState)

    // Act
    const round = buildRound(state)

    // Assert
    expect(round).to.be.an('Array').and.have.length(5)
  })

  it('should contain information about the current round', () => {
    // Arrange
    const state = Object.assign(
      {},
      initialState,
      {
        activeRound: 'greenhill',
        rounds: {
          greenhill: {
            previousRound: null,
            round: 1,
            turns: []
          }
        }
      }
    )

    // Act
    const round = buildRound(state)
    const [wrapper, classList, attributes, text, children] = round

    // Assert
    expect(wrapper).to.equal('div')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(classList).to.be.empty
    expect(attributes).to.not.have.any.keys('')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(2)
  })

  it("should contain options to choose from on one's turn", () => {
    // Arrange
    const state = Object.assign(
      {},
      initialState,
      {}
    )

    // Act
    const round = buildRound(state)
    // eslint-disable-next-line no-unused-vars
    const [roundText, select] = round[4]
    const [name, classList, attributes, text, children] = select

    // Assert
    expect(name).to.equal('select')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(classList).to.be.empty
    expect(attributes).to.have.key('id')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(5)
  })
})
