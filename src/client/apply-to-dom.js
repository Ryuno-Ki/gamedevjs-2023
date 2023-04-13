/**
 * Element was removed from virtual DOM, so remove from real one.
 *
 * @private
 * @param {HTMLElement} realNode
 */
function removeRealNodeFromDOM (realNode) {
  realNode.remove()
}

/**
 * Virtual DOM has new Element which needs to be added to real DOM.
 *
 * @private
 * @param {HTMLElement} parentNode
 * @param {HTMLElement} virtualNode
 */
function addToRealDOM (parentNode, virtualNode) {
  parentNode.appendChild(virtualNode)
}

/**
 * Element is present in both, so update real node with virtual one.
 *
 * @param {HTMLElement} realNode
 * @param {HTMLElement} virtualNode
 */
function replaceNode (realNode, virtualNode) {
  realNode.replaceWith(virtualNode)
}

/**
 * Compare virtual DOM node to real one.
 *
 * @private
 * @param {HTMLElement} node1
 * @param {HTMLElement} node2
 * @returns {boolean}
 */
function hasNodeChanged (node1, node2) {
  // Different tag name
  if (node1.tagName !== node2.tagName) {
    return true
  }

  const n1Attributes = node1.attributes
  const n2Attributes = node2.attributes

  // Different number of attributes
  if (n1Attributes.length !== n2Attributes.length) {
    return true
  }

  // Different attribute
  const differentAttribute = Array.from(n1Attributes).find(function (attribute) {
    const { name } = attribute

    const attribute1 = node1.getAttribute(name)
    const attribute2 = node2.getAttribute(name)

    return attribute1 !== attribute2
  })

  if (differentAttribute) {
    return true
  }

  // Different text leaves
  if (node1.children.length === 0 && node2.children.length === 0 && node1.textContent !== node2.textContent) {
    return true
  }

  return false
}

/**
 * Applies the UI rendered from state to the DOM.
 *
 * @param {HTMLElement} parentNode
 * @param {HTMLElement} realNode
 * @param {HTMLElement} virtualNode
 */
export function applyToDOM (parentNode, realNode, virtualNode) {
  if (realNode && !virtualNode) {
    return removeRealNodeFromDOM(realNode)
  }

  if (!realNode && virtualNode) {
    return addToRealDOM(parentNode, virtualNode)
  }

  if (hasNodeChanged(realNode, virtualNode)) {
    return replaceNode(realNode, virtualNode)
  }

  const realChildren = Array.from(realNode.children)
  const virtualChildren = Array.from(virtualNode.children)

  const max = Math.max(realChildren.length, virtualChildren.length)

  for (let i = 0; i < max; i++) {
    applyToDOM(
      realNode,
      /** @type {HTMLElement} */(realChildren[i]),
      /** @type {HTMLElement} */(virtualChildren[i])
    )
  }
}
