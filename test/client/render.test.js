import { expect } from 'chai'

import { document } from '../prepare.js'
import { APP_SELECTOR } from '../../src/constants.js'
import { add } from '../../src/client/registry.js'
import { render } from '../../src/client/render.js'
import { titleSceneComponent } from '../../src/client/components/scenes/title.js'

describe('render', () => {
  afterEach(() => {
    if (global.document) {
      delete global.document
    }
  })

  it('should update the DOM', async () => {
    // Arrange
    global.document = document
    global.document.body.innerHTML = `
      <main id="${APP_SELECTOR.slice(1)}">
        <section data-component="title-scene"></section>
      </main>
    `
    add('title-scene', titleSceneComponent)
    render._runOnlyOnce = true

    // Act
    await render()

    // Assert
    expect(global.document.body.innerHTML).to.contain('Title')
  })
})
