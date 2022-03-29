import type { App } from 'vue'
import { h, render } from 'vue'
import USpin from './USpin.vue'

export function install(app: App) {
  app.component('USpin', USpin)
}

let onlyContainer = null

export function show(target: Element) {
  // father box keep relative
  target.style.position = 'relative'
  const { offsetHeight, offsetWidth } = target

  const element = h(USpin, {
    offsetHeight,
    offsetWidth,
  })
  onlyContainer = document.createElement('div')

  render(element, onlyContainer)
  target.appendChild(onlyContainer)
}

export function hidden(target: Element) {
  target.removeChild(onlyContainer)
}
