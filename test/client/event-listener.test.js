import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { el } from '../../src/client/components/el.js'
import { registerEventListeners } from '../../src/client/event-listener.js'
import { switchToScene } from '../../src/client/state/actions/switch-to-scene.js'
import store from '../../src/client/state/store.js'
import { document, HTMLAnchorElement } from '../prepare.js'

chai.use(sinonChai)
const { expect } = chai

describe('registerEventListeners', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
    sinon.restore()
  })

  it('should register click event listeners', async () => {
    // Arrange
    const scene = 'invalid'
    const element = el('a', [], { href: `#${scene}` })
    document.body.appendChild(element)
    const payload = switchToScene(scene)

    sinon.spy(HTMLAnchorElement.prototype, 'click')
    const dispatchSpy = sinon.spy(store, 'dispatch')

    // Act
    registerEventListeners()
    element.click()

    // Assert
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(dispatchSpy).to.have.been.calledOnce
    expect(dispatchSpy).to.have.been.calledWith(payload)
  })
})
