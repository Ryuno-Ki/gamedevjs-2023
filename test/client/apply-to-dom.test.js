import { expect } from 'chai'

import { document } from '../prepare.js'
import { APP_SELECTOR } from '../../src/constants.js'
import { applyToDOM } from '../../src/client/apply-to-dom.js'

describe('applyToDOM', () => {
  it('should apply changes to the DOM', () => {
    // Arrange
    // Do not insert newlines here as it tampers with the assertion
    document.body.innerHTML = `
      <main id="${APP_SELECTOR.slice(1)}"><section data-component="settings-scene"></section></main>
    `
    const parentNode = document.body
    const realNode = document.body.querySelector('[data-component="settings-scene"]') || document.createElement('div')
    const virtualNode = document.createElement('div')

    // Act
    applyToDOM(parentNode, realNode, virtualNode)

    // Assert
    // Modulo whitespace this should be equal
    expect(document.body.innerHTML.replace(/\s/g, ' ').trim()).to.equal('<main id="app"><div></div></main>')
  })
})
