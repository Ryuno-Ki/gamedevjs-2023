import chai from 'chai'
import chaiAlmost from 'chai-almost'

import { initialState } from '../../../src/client/state/initial.js'
import {
  buildRightFields,
  computeRightFieldPoints
} from '../../../src/client/components/right-field.js'

chai.use(chaiAlmost(0.05))
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
    const world = Object.assign(
      {},
      initialState.worlds[0],
      {
        facesPerColumn: 1,
        facesPerRow: 1
      }
    )

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
    ] = computeRightFieldPoints(world)
    /*
     * Faces are positioned like so:
     *          pf
     *       pe pb
     *    pd pa p7
     * pc p9 p6 p3
     * p8 p5 p2
     * p4 p1
     * p0
     */

    const [bl0, tl0, tr0, br0] = p0
    const [bl1, tl1, tr1, br1] = p1
    const [bl2, tl2, tr2, br2] = p2
    const [bl3, tl3, tr3, br3] = p3
    const [bl4, tl4, tr4, br4] = p4
    const [bl5, tl5, tr5, br5] = p5
    const [bl6, tl6, tr6, br6] = p6
    const [bl7, tl7, tr7, br7] = p7
    const [bl8, tl8, tr8, br8] = p8
    const [bl9, tl9, tr9, br9] = p9
    const [bla, tla, tra, bra] = pa
    const [blb, tlb, trb, brb] = pb
    const [blc, tlc, trc, brc] = pc
    const [bld, tld, trd, brd] = pd
    const [ble, tle, tre, bre] = pe
    const [blf, tlf, trf, brf] = pf

    // Assert
    // Basically move up cubeLength / facesPerRow = 7.5
    // Move to the _right_ cubeLength / facesPerColumn * cos(30deg) = ca 6.5
    // Move up again cubeLength / facesPerRow * sin(30deg) = 3.75
    // 1st row from bottom
    expect(p0).to.be.an('Array').and.have.length(4)
    expect(bl0).to.deep.almost([50, 72.5])
    expect(tl0).to.deep.almost([50, 65])
    expect(tr0).to.deep.almost([56.5, 61.25])
    expect(br0).to.deep.almost([56.5, 68.75])

    expect(p1).to.be.an('Array').and.have.length(4)
    expect(bl1).to.deep.almost([56.5, 68.75])
    expect(tl1).to.deep.almost([56.5, 61.25])
    expect(tr1).to.deep.almost([63, 57.5])
    expect(br1).to.deep.almost([63, 65])

    expect(p2).to.be.an('Array').and.have.length(4)
    expect(bl2).to.deep.almost([63, 65])
    expect(tl2).to.deep.almost([63, 57.5])
    expect(tr2).to.deep.almost([69.5, 53.75])
    expect(br2).to.deep.almost([69.5, 61.25])

    expect(p3).to.be.an('Array').and.have.length(4)
    expect(bl3).to.deep.almost([69.5, 61.25])
    expect(tl3).to.deep.almost([69.5, 53.75])
    expect(tr3).to.deep.almost([76, 50])
    expect(br3).to.deep.almost([76, 57.5])

    // 2nd row from bottom
    expect(p4).to.be.an('Array').and.have.length(4)
    expect(bl4).to.deep.almost([50, 65])
    expect(tl4).to.deep.almost([50, 57.5])
    expect(tr4).to.deep.almost([56.5, 53.75])
    expect(br4).to.deep.almost([56.5, 61.25])

    expect(p5).to.be.an('Array').and.have.length(4)
    expect(bl5).to.deep.almost([56.5, 61.25])
    expect(tl5).to.deep.almost([56.5, 53.75])
    expect(tr5).to.deep.almost([63, 50])
    expect(br5).to.deep.almost([63, 57.5])

    expect(p6).to.be.an('Array').and.have.length(4)
    expect(bl6).to.deep.almost([63, 57.5])
    expect(tl6).to.deep.almost([63, 50])
    expect(tr6).to.deep.almost([69.5, 46.25])
    expect(br6).to.deep.almost([69.5, 53.75])

    expect(p7).to.be.an('Array').and.have.length(4)
    expect(bl7).to.deep.almost([69.5, 53.75])
    expect(tl7).to.deep.almost([69.5, 46.25])
    expect(tr7).to.deep.almost([76, 42.5])
    expect(br7).to.deep.almost([76, 50])

    // 3rd row from bottom
    expect(p8).to.be.an('Array').and.have.length(4)
    expect(bl8).to.deep.almost([50, 57.5])
    expect(tl8).to.deep.almost([50, 50])
    expect(tr8).to.deep.almost([56.5, 46.25])
    expect(br8).to.deep.almost([56.5, 53.75])

    expect(p9).to.be.an('Array').and.have.length(4)
    expect(bl9).to.deep.almost([56.5, 53.75])
    expect(tl9).to.deep.almost([56.5, 46.25])
    expect(tr9).to.deep.almost([63, 42.5])
    expect(br9).to.deep.almost([63, 50])

    expect(pa).to.be.an('Array').and.have.length(4)
    expect(bla).to.deep.almost([63, 50])
    expect(tla).to.deep.almost([63, 42.5])
    expect(tra).to.deep.almost([69.5, 38.75])
    expect(bra).to.deep.almost([69.5, 46.25])

    expect(pb).to.be.an('Array').and.have.length(4)
    expect(blb).to.deep.almost([69.5, 46.25])
    expect(tlb).to.deep.almost([69.5, 38.75])
    expect(trb).to.deep.almost([76, 35])
    expect(brb).to.deep.almost([76, 42.5])

    // 4th row from bottom
    expect(pc).to.be.an('Array').and.have.length(4)
    expect(blc).to.deep.almost([50, 50])
    expect(tlc).to.deep.almost([50, 42.5])
    expect(trc).to.deep.almost([56.5, 38.75])
    expect(brc).to.deep.almost([56.5, 46.25])

    expect(pd).to.be.an('Array').and.have.length(4)
    expect(bld).to.deep.almost([56.5, 46.25])
    expect(tld).to.deep.almost([56.5, 38.75])
    expect(trd).to.deep.almost([63, 35])
    expect(brd).to.deep.almost([63, 42.5])

    expect(pe).to.be.an('Array').and.have.length(4)
    expect(ble).to.deep.almost([63, 42.5])
    expect(tle).to.deep.almost([63, 35])
    expect(tre).to.deep.almost([69.5, 31.25])
    expect(bre).to.deep.almost([69.5, 38.75])

    expect(pf).to.be.an('Array').and.have.length(4)
    expect(blf).to.deep.almost([69.5, 38.75])
    expect(tlf).to.deep.almost([69.5, 31.25])
    expect(trf).to.deep.almost([76, 27.5])
    expect(brf).to.deep.almost([76, 35])
  })
})
