/**
 * Utility function to generate a DOM.
 *
 * @param {string} name - A DOM nodeName
 * @param {Array<string>} classList - HTML classes to assign
 * @param {Object<string, string>} attributes - Additional HTML attributes
 * @param {string} text - Text content of node
 * @param {Array<*>} children - Recursively invoke this function
 * @returns {HTMLElement}
 */
export function el (name, classList = [], attributes = {}, text = '', children = []) {
  const element = document.createElement(name)
  classList.forEach((className) => element.classList.add(className))
  Object.entries(attributes).forEach((attribute) => {
    const [key, value] = attribute
    element.setAttribute(key, value)
  })
  element.textContent = text
  children.forEach((child) => {
    // FIXME: Investigate type error here
    // @ts-ignore
    element.appendChild(el(...child))
  })

  return element
}
