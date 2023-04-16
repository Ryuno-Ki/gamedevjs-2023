import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { el } from '../../src/client/components/el.js'
import {
  onClick,
  onInput,
  registerEventListeners
} from '../../src/client/event-listener.js'
import { setNickname } from '../../src/client/state/actions/set-nickname.js'
import { switchToScene } from '../../src/client/state/actions/switch-to-scene.js'
import store from '../../src/client/state/store.js'
import { document, HTMLAnchorElement, InputEvent } from '../prepare.js'

chai.use(sinonChai)
const { expect } = chai

describe('registerEventListeners', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
    sinon.restore()
    document.body.removeEventListener('click', onClick)
    document.body.removeEventListener('input', onInput)
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

  it('should register input event listeners', async () => {
    // Arrange
    const index = 2
    const nickname = 'Mega'
    const element = el(
      'input',
      [],
      { 'data-index': index, type: 'text', value: nickname }
    )
    document.body.appendChild(element)
    const payload = setNickname(index, nickname)
    const event = new InputEvent('input', { bubbles: true, cancelable: true })

    const dispatchSpy = sinon.spy(store, 'dispatch')

    // Act
    registerEventListeners()
    element.dispatchEvent(event)

    // Assert
    // Standard is tripped up by Chai here
    // eslint-disable-next-line no-unused-expressions
    expect(dispatchSpy).to.have.been.calledOnce
    expect(dispatchSpy).to.have.been.calledWith(payload)
  })
})