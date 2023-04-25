import chai from 'chai'
import chaiAlmost from 'chai-almost'

import { initialState } from '../../../src/client/state/initial.js'
import {
  buildTopFields,
  computeTopFieldPoints
} from '../../../src/client/components/top-field.js'

chai.use(chaiAlmost(0.05))
const { expect } = chai

describe('buildTopFields', () => {
  it('should produce a data structure that can be consumed by svg', () => {
    // Arrange
    const world = Object.assign({}, initialState.worlds[0])

    // Act
    const topFields = buildTopFields(world)

    // Assert
    expect(topFields).to.be.an('Array').and.have.length(5)
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
    const topFields = buildTopFields(world)
    const [name, classList, attributes, text, children] = topFields

    // Assert
    expect(name).to.equal('g')
    expect(classList).to.contain('top')
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

describe('computeTopFieldPoints', () => {
  it('should compute the top number of faces', () => {
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
    const points = computeTopFieldPoints(world)

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
    const [points] = computeTopFieldPoints(world)
    const [bottom, left, top, right] = points

    // Assert
    expect(points).to.be.an('Array').and.have.length(4)
    expect(bottom).to.deep.almost([50, 42.5])
    expect(left).to.deep.almost([24.02, 27.5])
    expect(top).to.deep.almost([50, 12.5])
    expect(right).to.deep.almost([75.98, 27.5])
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
    ] = computeTopFieldPoints(world)
    /*
     * Faces are positioned like so:
     *
     *          pf
     *       pb    pe
     *    p7    pa    pd
     * p3    p6    p9    pc
     *    p2    p5    p8
     *       p1    p4
     *          p0
     */

    const [b0, l0, t0, r0] = p0
    const [b1, l1, t1, r1] = p1
    const [b2, l2, t2, r2] = p2
    const [b3, l3, t3, r3] = p3
    const [b4, l4, t4, r4] = p4
    const [b5, l5, t5, r5] = p5
    const [b6, l6, t6, r6] = p6
    const [b7, l7, t7, r7] = p7
    const [b8, l8, t8, r8] = p8
    const [b9, l9, t9, r9] = p9
    const [ba, la, ta, ra] = pa
    const [bb, lb, tb, rb] = pb
    const [bc, lc, tc, rc] = pc
    const [bd, ld, td, rd] = pd
    const [be, le, te, re] = pe
    const [bf, lf, tf, rf] = pf

    // Assert
    // Move left cubeLength / facesPerColumn * cos(30deg) = ca 6.5
    // Move up   cubeLength / facesPerRow    * sin(30deg) =    3.75
    // Then:
    // Move right cubeLength / facesPerColumn * cos(30deg) = ca 6.5
    // Move up   cubeLength / facesPerRow    * sin(30deg) =     3.75
    // Then:
    // Move right cubeLength / facesPerColumn * cos(30deg) = ca 6.5
    // Move down  cubeLength / facesPerRow    * sin(30deg) =    3.75

    // 1st row
    expect(p0).to.be.an('Array').and.have.length(4)
    expect(b0).to.deep.almost([50, 42.5])
    expect(l0).to.deep.almost([43.5, 38.75])
    expect(t0).to.deep.almost([50, 35])
    expect(r0).to.deep.almost([56.5, 38.75])

    expect(p1).to.be.an('Array').and.have.length(4)
    expect(b1).to.deep.almost([43.5, 38.75])
    expect(l1).to.deep.almost([37, 35])
    expect(t1).to.deep.almost([43.5, 31.25])
    expect(r1).to.deep.almost([50, 35])

    expect(p2).to.be.an('Array').and.have.length(4)
    expect(b2).to.deep.almost([37, 35])
    expect(l2).to.deep.almost([30.5, 31.25])
    expect(t2).to.deep.almost([37, 27.5])
    expect(r2).to.deep.almost([43.5, 31.25])

    expect(p3).to.be.an('Array').and.have.length(4)
    expect(b3).to.deep.almost([30.5, 31.25])
    expect(l3).to.deep.almost([24, 27.5])
    expect(t3).to.deep.almost([30.5, 23.75])
    expect(r3).to.deep.almost([37, 27.5])

    // 2nd row from bottom
    expect(p4).to.be.an('Array').and.have.length(4)
    expect(b4).to.deep.almost([56.5, 38.75])
    expect(l4).to.deep.almost([50, 35])
    expect(t4).to.deep.almost([56.5, 31.25])
    expect(r4).to.deep.almost([63, 35])

    expect(p5).to.be.an('Array').and.have.length(4)
    expect(b5).to.deep.almost([50, 35])
    expect(l5).to.deep.almost([43.5, 31.25])
    expect(t5).to.deep.almost([50, 27.5])
    expect(r5).to.deep.almost([56.5, 31.25])

    expect(p6).to.be.an('Array').and.have.length(4)
    expect(b6).to.deep.almost([43.5, 31.25])
    expect(l6).to.deep.almost([37, 27.5])
    expect(t6).to.deep.almost([43.5, 23.75])
    expect(r6).to.deep.almost([50, 27.5])

    expect(p7).to.be.an('Array').and.have.length(4)
    expect(b7).to.deep.almost([37, 27.5])
    expect(l7).to.deep.almost([30.5, 23.75])
    expect(t7).to.deep.almost([37, 20])
    expect(r7).to.deep.almost([43.5, 23.75])

    // 3rd row from bottom
    expect(p8).to.be.an('Array').and.have.length(4)
    expect(b8).to.deep.almost([63, 35])
    expect(l8).to.deep.almost([56.5, 31.25])
    expect(t8).to.deep.almost([63, 27.5])
    expect(r8).to.deep.almost([69.5, 31.25])

    expect(p9).to.be.an('Array').and.have.length(4)
    expect(b9).to.deep.almost([56.5, 31.25])
    expect(l9).to.deep.almost([50, 27.5])
    expect(t9).to.deep.almost([56.5, 23.75])
    expect(r9).to.deep.almost([63, 27.5])

    expect(pa).to.be.an('Array').and.have.length(4)
    expect(ba).to.deep.almost([50, 27.5])
    expect(la).to.deep.almost([43.5, 23.75])
    expect(ta).to.deep.almost([50, 20])
    expect(ra).to.deep.almost([56.5, 23.75])

    expect(pb).to.be.an('Array').and.have.length(4)
    expect(bb).to.deep.almost([43.5, 23.75])
    expect(lb).to.deep.almost([37, 20])
    expect(tb).to.deep.almost([43.5, 16.25])
    expect(rb).to.deep.almost([50, 20])

    // 4th row from bottom
    expect(pc).to.be.an('Array').and.have.length(4)
    expect(bc).to.deep.almost([69.5, 31.25])
    expect(lc).to.deep.almost([63, 27.5])
    expect(tc).to.deep.almost([69.5, 23.75])
    expect(rc).to.deep.almost([76, 27.5])

    expect(pd).to.be.an('Array').and.have.length(4)
    expect(bd).to.deep.almost([63, 27.5])
    expect(ld).to.deep.almost([56.5, 23.75])
    expect(td).to.deep.almost([63, 20])
    expect(rd).to.deep.almost([69.5, 23.75])

    expect(pe).to.be.an('Array').and.have.length(4)
    expect(be).to.deep.almost([56.5, 23.75])
    expect(le).to.deep.almost([50, 20])
    expect(te).to.deep.almost([56.5, 16.25])
    expect(re).to.deep.almost([63, 20])

    expect(pf).to.be.an('Array').and.have.length(4)
    expect(bf).to.deep.almost([50, 20])
    expect(lf).to.deep.almost([43.5, 16.25])
    expect(tf).to.deep.almost([50, 12.5])
    expect(rf).to.deep.almost([56.5, 16.25])
  })
})
