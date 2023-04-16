import chai from 'chai'
import chaiDom from 'chai-dom'

import { el } from '../../../src/client/components/el.js'
import { document } from '../../prepare.js'

chai.use(chaiDom)
const { expect } = chai

describe('el', () => {
  beforeEach(() => {
    global.document = document
  })

  afterEach(() => {
    delete global.document
  })

  describe('with no classList', () => {
    describe('and no attributes', () => {
      describe('and no text', () => {
        describe('and no children', () => {
          it('should generate an empty element', () => {
            // Arrange
            const name = 'div'

            // Act
            const element = el(name)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text('')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('but with children', () => {
          it('should generate an element with those children', () => {
            // Arrange
            const name = 'div'
            const children = [['span']]

            // Act
            const element = el(name, [], {}, '', children)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text('')
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })

      describe('but with text', () => {
        describe('and no children', () => {
          it('should generate an empty element with text', () => {
            // Arrange
            const name = 'div'
            const text = 'This is a test'

            // Act
            const element = el(name, [], {}, text)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text(text)
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('and with children', () => {
          it('should generate an element with text and those children', () => {
            // Arrange
            const name = 'div'
            const children = [['span']]
            const text = 'This is a test'

            // Act
            const element = el(name, [], {}, text, children)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text(text)
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })
    })

    describe('but with attributes', () => {
      describe('and no text', () => {
        describe('and no children', () => {
          it('should generate an empty element with attributes', () => {
            // Arrange
            const name = 'div'
            const key = 'data-something'
            const attributes = { [key]: 'else' }

            // Act
            const element = el(name, [], attributes)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text('')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('but with children', () => {
          it('should generate an element with attributes and those children', () => {
            // Arrange
            const name = 'div'
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const children = [['span']]

            // Act
            const element = el(name, [], attributes, '', children)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text('')
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })

      describe('but with text', () => {
        describe('and no children', () => {
          it('should generate an empty element with attributes and text', () => {
            // Arrange
            const name = 'div'
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const text = 'This is a test'

            // Act
            const element = el(name, [], attributes, text)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text(text)
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('and with children', () => {
          it('should generate an element with attributes, text and those children', () => {
            // Arrange
            const name = 'div'
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const children = [['span']]
            const text = 'This is a test'

            // Act
            const element = el(name, [], attributes, text, children)

            // Assert
            expect(element).to.have.tagName('div')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.class
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text(text)
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })
    })
  })

  describe('with a classList', () => {
    describe('but no attributes', () => {
      describe('and no text', () => {
        describe('and no children', () => {
          it('should generate an empty element with classes', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']

            // Act
            const element = el(name, classList)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text('')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('but with children', () => {
          it('should generate an element with classes and those children', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const children = [['span']]

            // Act
            const element = el(name, classList, {}, '', children)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text('')
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })

      describe('but with text', () => {
        describe('and no children', () => {
          it('should generate an empty element with classes and text', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const text = 'This is a test'

            // Act
            const element = el(name, classList, {}, text)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text(text)
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('and with children', () => {
          it('should generate an element with classes, text and those children', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const children = [['span']]
            const text = 'This is a test'

            // Act
            const element = el(name, classList, {}, text, children)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.not.have.an.attribute
            expect(element).to.have.text(text)
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })
    })

    describe('but with attributes', () => {
      describe('and no text', () => {
        describe('and no children', () => {
          it('should generate an empty element with classes and attributes', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const key = 'data-something'
            const attributes = { [key]: 'else' }

            // Act
            const element = el(name, classList, attributes)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text('')
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('but with children', () => {
          it('should generate an element with classes, attributes and those children', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const children = [['span']]

            // Act
            const element = el(name, classList, attributes, '', children)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text('')
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })

      describe('but with text', () => {
        describe('and no children', () => {
          it('should generate an empty element with classes, attributes and text', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const text = 'This is a test'

            // Act
            const element = el(name, classList, attributes, text)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text(text)
            // Standard is tripped up by Chai here
            // eslint-disable-next-line no-unused-expressions
            expect(element).to.be.empty
          })
        })

        describe('and with children', () => {
          it('should generate an element with classes, attributes, text and those children', () => {
            // Arrange
            const name = 'div'
            const classList = ['my', 'shiny', 'game']
            const key = 'data-something'
            const attributes = { [key]: 'else' }
            const children = [['span']]
            const text = 'This is a test'

            // Act
            const element = el(name, classList, attributes, text, children)

            // Assert
            expect(element).to.have.tagName('div')
            classList.forEach((className) => {
              expect(element).to.have.class(className)
            })
            expect(element).to.have.an.attribute(key, attributes[key])
            expect(element).to.have.text(text)
            expect(element).to.have.length(children.length)
            expect(element).to.have.descendant(children[0][0])
          })
        })
      })
    })
  })
})
