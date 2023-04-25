import chai from 'chai'
import chaiAlmost from 'chai-almost'

import { initialState } from '../../../src/client/state/initial.js'
import {
  buildLeftFields,
  computeLeftFieldPoints
} from '../../../src/client/components/left-field.js'

chai.use(chaiAlmost(0.05))
const { expect } = chai

describe('buildLeftFields', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const leftFields = buildLeftFields(world)

    // Assert
    expect(leftFields).to.be.an('Array').and.have.length(5)
  })

  it('should have child components equal to number of players', () => {
    // Arrange
    const world = Object.assign(
      {},
      initialState.worlds[0],
      {
        facesPerColumn: 1,
        facesPerRow: 1
      }
    )

    // Act
    const leftFields = buildLeftFields(world)
    const [name, classList, attributes, text, children] = leftFields

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('left')
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

describe('computeLeftFieldPoints', () => {
  it('should compute the left number of faces', () => {
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
    const points = computeLeftFieldPoints(world)

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
    const [points] = computeLeftFieldPoints(world)
    const [bottomRight, topRight, topLeft, bottomLeft] = points

    // Assert
    expect(points).to.be.an('Array').and.have.length(4)
    expect(bottomRight).to.deep.equal([50, 72.5])
    expect(topRight).to.deep.equal([50, 42.5])
    expect(topLeft).to.deep.almost([24.02, 27.5])
    expect(bottomLeft).to.deep.almost([24.02, 57.5])
  })

  it('should compute the points for a 4x4 faces per field', () => {
    // Arrange
    const world = Object.assign(
      {},
      initialState.worlds[0],
      {
        cubelength: 30,
        facesPerColumn: 4,
        facesPerRow: 4
      }
    )

    // Act
    const [
      p0,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      pa,
      pb,
      pc,
      pd,
      pe,
      pf
    ] = computeLeftFieldPoints(world)
    /*
     * Faces are positioned like so:
     * pf
     * pb pe
     * p7 pa pd
     * p3 p6 p9 pc
     *    p2 p5 p8
     *       p1 p4
     *          p0
     */

    const [br0, tr0, tl0, bl0] = p0
    const [br1, tr1, tl1, bl1] = p1
    const [br2, tr2, tl2, bl2] = p2
    const [br3, tr3, tl3, bl3] = p3
    const [br4, tr4, tl4, bl4] = p4
    const [br5, tr5, tl5, bl5] = p5
    const [br6, tr6, tl6, bl6] = p6
    const [br7, tr7, tl7, bl7] = p7
    const [br8, tr8, tl8, bl8] = p8
    const [br9, tr9, tl9, bl9] = p9
    const [bra, tra, tla, bla] = pa
    const [brb, trb, tlb, blb] = pb
    const [brc, trc, tlc, blc] = pc
    const [brd, trd, tld, bld] = pd
    const [bre, tre, tle, ble] = pe
    const [brf, trf, tlf, blf] = pf

    // Assert
    // Basically move up cubeLength / facesPerRow = 7.5
    // Move to the _left_ cubeLength / facesPerColumn * cos(30deg) = ca 6.5
    // Move up again cubeLength / facesPerRow * sin(30deg) = 3.75
    // 1st row from bottom
    expect(p0).to.be.an('Array').and.have.length(4)
    expect(br0).to.deep.almost([50, 72.5])
    expect(tr0).to.deep.almost([50, 65])
    expect(tl0).to.deep.almost([43.5, 61.25])
    expect(bl0).to.deep.almost([43.5, 68.75])

    expect(p1).to.be.an('Array').and.have.length(4)
    expect(br1).to.deep.almost([43.5, 68.75])
    expect(tr1).to.deep.almost([43.5, 61.25])
    expect(tl1).to.deep.almost([37, 57.5])
    expect(bl1).to.deep.almost([37, 65])

    expect(p2).to.be.an('Array').and.have.length(4)
    expect(br2).to.deep.almost([37, 65])
    expect(tr2).to.deep.almost([37, 57.5])
    expect(tl2).to.deep.almost([30.5, 53.75])
    expect(bl2).to.deep.almost([30.5, 61.25])

    expect(p3).to.be.an('Array').and.have.length(4)
    expect(br3).to.deep.almost([30.5, 61.25])
    expect(tr3).to.deep.almost([30.5, 53.75])
    expect(tl3).to.deep.almost([24, 50])
    expect(bl3).to.deep.almost([24, 57.5])

    // 2nd row from bottom
    expect(p4).to.be.an('Array').and.have.length(4)
    expect(br4).to.deep.almost([50, 65])
    expect(tr4).to.deep.almost([50, 57.5])
    expect(tl4).to.deep.almost([43.5, 53.75])
    expect(bl4).to.deep.almost([43.5, 61.25])

    expect(p5).to.be.an('Array').and.have.length(4)
    expect(br5).to.deep.almost([43.5, 61.25])
    expect(tr5).to.deep.almost([43.5, 53.75])
    expect(tl5).to.deep.almost([37, 50])
    expect(bl5).to.deep.almost([37, 57.5])

    expect(p6).to.be.an('Array').and.have.length(4)
    expect(br6).to.deep.almost([37, 57.5])
    expect(tr6).to.deep.almost([37, 50])
    expect(tl6).to.deep.almost([30.5, 46.25])
    expect(bl6).to.deep.almost([30.5, 53.75])

    expect(p7).to.be.an('Array').and.have.length(4)
    expect(br7).to.deep.almost([30.5, 53.75])
    expect(tr7).to.deep.almost([30.5, 46.25])
    expect(tl7).to.deep.almost([24, 42.5])
    expect(bl7).to.deep.almost([24, 50])

    // 3rd row from bottom
    expect(p8).to.be.an('Array').and.have.length(4)
    expect(br8).to.deep.almost([50, 57.5])
    expect(tr8).to.deep.almost([50, 50])
    expect(tl8).to.deep.almost([43.5, 46.25])
    expect(bl8).to.deep.almost([43.5, 53.75])

    expect(p9).to.be.an('Array').and.have.length(4)
    expect(br9).to.deep.almost([43.5, 53.75])
    expect(tr9).to.deep.almost([43.5, 46.25])
    expect(tl9).to.deep.almost([37, 42.5])
    expect(bl9).to.deep.almost([37, 50])

    expect(pa).to.be.an('Array').and.have.length(4)
    expect(bra).to.deep.almost([37, 50])
    expect(tra).to.deep.almost([37, 42.5])
    expect(tla).to.deep.almost([30.5, 38.75])
    expect(bla).to.deep.almost([30.5, 46.25])

    expect(pb).to.be.an('Array').and.have.length(4)
    expect(brb).to.deep.almost([30.5, 46.25])
    expect(trb).to.deep.almost([30.5, 38.75])
    expect(tlb).to.deep.almost([24, 35])
    expect(blb).to.deep.almost([24, 42.5])

    // 4th row from bottom
    expect(pc).to.be.an('Array').and.have.length(4)
    expect(brc).to.deep.almost([50, 50])
    expect(trc).to.deep.almost([50, 42.5])
    expect(tlc).to.deep.almost([43.5, 38.75])
    expect(blc).to.deep.almost([43.5, 46.25])

    expect(pd).to.be.an('Array').and.have.length(4)
    expect(brd).to.deep.almost([43.5, 46.25])
    expect(trd).to.deep.almost([43.5, 38.75])
    expect(tld).to.deep.almost([37, 35])
    expect(bld).to.deep.almost([37, 42.5])

    expect(pe).to.be.an('Array').and.have.length(4)
    expect(bre).to.deep.almost([37, 42.5])
    expect(tre).to.deep.almost([37, 35])
    expect(tle).to.deep.almost([30.5, 31.25])
    expect(ble).to.deep.almost([30.5, 38.75])

    expect(pf).to.be.an('Array').and.have.length(4)
    expect(brf).to.deep.almost([30.5, 38.75])
    expect(trf).to.deep.almost([30.5, 31.25])
    expect(tlf).to.deep.almost([24, 27.5])
    expect(blf).to.deep.almost([24, 35])
  })
})
