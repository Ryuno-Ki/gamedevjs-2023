/** @typedef {import('./state/initial').State} State */

/**
 * Internal registry of component names to DOM nodes.
 *
 * @type {Map<string, * | null>}
 * @private
 */
const registry = new Map()

/**
 * Utility function to update DOM.
 *
 * @private
 * @param {*} component
 */
function renderWrapper (component) {
  /**
   * Recursively apply component update on children.
   *
   * @param {HTMLElement} targetElement
   * @param {State} state
   * @return {HTMLElement}
   */
  return function (targetElement, state) {
    const element = component(targetElement, state)
    const childComponents = Array.from(element.querySelectorAll('[data-component]'))
    childComponents.forEach(function (target) {
      const name = target.dataset.component
      const child = registry.get(name)
      if (!child) {
        return
      }

      target.replaceWith(child(target, state))
    })

    return element
  }
}

/**
 * Registers a component by name.
 *
 * @param {string} name
 * @param {*} component
 */
export function add (name, component) {
  registry.set(name, renderWrapper(component))
}

/**
 * Creates a virtual DOM representing the new UI.
 *
 * @param {HTMLElement} root
 * @param {State} state
 * @returns {HTMLElement}
 */
export function render (root, state) {
  /**
   * Clones a component for further manipulation.
   *
   * @private
   * @param {HTMLElement} root
   */
  function cloneComponent (root) {
    return root.cloneNode(true)
  }

  return renderWrapper(cloneComponent)(root, state)
}
