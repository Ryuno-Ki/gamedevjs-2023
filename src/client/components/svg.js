/**
 * Utility function to generate SVG.
 *
 * @param {string} name - A SVG name
 * @param {Array<string>} classList - HTML classes to assign
 * @param {Object<string, string>} attributes - Additional HTML attributes
 * @param {Array<*>} children - Recursively invoke this function
 * @returns {SVGElement}
 */
export function svg (name, classList = [], attributes = {}, children = []) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name)
  classList.forEach((className) => element.classList.add(className))

  Object.entries(attributes).forEach((attribute) => {
    const [key, value] = attribute
    element.setAttribute(key, value)
  })

  children.forEach((child) => {
    // FIXME: Investigate type error here
    // @ts-ignore
    element.appendChild(svg(...child))
  })
  return element
}
