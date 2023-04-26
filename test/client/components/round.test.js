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
    expect(children).to.be.an('Array').and.have.length(3)
  })

  it('should display the previous votes', () => {
    // Arrange
    const state = Object.assign(
      {},
      initialState,
      {
        activeRound: 'sonic',
        rounds: {
          knuckles: {
            previousRound: null,
            round: 1,
            turns: ['efgh', 'abcd', 'efgh']
          },
          tails: {
            previousRound: 'knuckles',
            round: 2,
            turns: ['abcd', 'efgh', 'abcd']
          },
          sonic: {
            previousRound: 'tails',
            round: 3,
            turns: ['ihjk']
          }
        }
      }
    )

    // Act
    const round = buildRound(state)
    const votes = round[4][1]
    const [wrapper, classList, attributes, text, children] = votes

    // Assert
    expect(wrapper).to.equal('span')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(classList).to.be.empty
    expect(attributes).to.not.have.any.keys('')
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(text).to.be.empty
    expect(children).to.be.an('Array').and.have.length(3)
  })

  it("should contain options to choose from on one's turn", () => {
    // Arrange
    const [world] = initialState.worlds
    const state = Object.assign({}, initialState, { activeWorld: world.id })

    // Act
    const round = buildRound(state)
    const select = round[4][2]
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
    expect(children).to.be.an('Array').and.have.length(1 + world.solution.length)
  })

  it('should not contain previously selected options', () => {
    // Arrange
    const solution = ['abcd', 'ijkl', 'efgh']
    const state = Object.assign(
      {},
      initialState,
      {
        activeRound: 'sonic',
        activeWorld: 'greenhill',
        rounds: {
          sonic: {
            previousRound: 'tails',
            round: 2,
            turns: []
          },
          tails: {
            previousRound: null,
            round: 1,
            turns: ['abcd', 'efgh', 'ijkl']
          }
        },
        worlds: [{
          id: 'greenhill',
          cubeLength: 1,
          facesPerColumn: 1,
          facesPerRow: 1,
          solution
        }]
      }
    )

    // Act
    const round = buildRound(state)
    const select = round[4][2]
    const options = select[4]
    const values = options.map((option) => option[2].value)

    // Assert
    expect(options).to.be.an('Array').and.have.length(
      // Default pick option + all solutions (sorted) - previous selection
      1 + solution.length - 1
    )
    expect(values).to.deep.equal(['', 'efgh', 'ijkl'])
  })
})
