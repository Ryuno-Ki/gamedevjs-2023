import { JSDOM } from 'jsdom'

// See https://stackoverflow.com/a/57318088
const jsdom = new JSDOM(undefined, { url: 'http://localhost' })

export const document = jsdom.window.document
export const HTMLAnchorElement = jsdom.window.HTMLAnchorElement
export const InputEvent = jsdom.window.InputEvent
