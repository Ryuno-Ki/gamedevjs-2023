/**
 * Logger utility.
 *
 * @param {string} prefix
 */
export function getLogger (prefix) {
  return {
    // @ts-ignore
    debug: console.debug.bind(this, prefix),
    // @ts-ignore
    error: console.error.bind(this, prefix),
    // @ts-ignore
    info: console.info.bind(this, prefix),
    // @ts-ignore
    log: console.log.bind(this, prefix),
    // @ts-ignore
    warn: console.warn.bind(this, prefix)
  }
}
