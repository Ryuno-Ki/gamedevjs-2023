import { expect } from 'chai'

import { document } from '../prepare.js'
import { add, render } from '../../src/client/registry.js'
import { initialState } from '../../src/client/state/initial.js'

/** @typedef {import('../../src/client/state/initial').State} State */

describe('registry', () => {
  describe('add', () => {
    it('should add a new component to the internal registry', () => {
      // Arrange
      function component (
        /** @type {HTMLElement} */el,
        /** @type {State} */state
      ) {
        return el
      }

      // Act
      // Assert
      expect(() => add('test-component', component)).to.not.throw()
    })
  })

  describe('render', () => {
    it('should render a component to a DOM element', () => {
      // Arrange
      const state = Object.assign({}, initialState)

      // Act
      const newComponent = render(document.body, state)

      // Assert
      expect(newComponent).not.to.equal(document.body)
      expect(newComponent.innerHTML).to.deep.equal(document.body.innerHTML)
    })
  })
})
