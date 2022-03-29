import { h, render } from 'vue'
import USpin from './USpin.vue'

const map = new Map<Element, Element>()

export function show(target: Element) {
  // return if already exist
  if (map.has(target)) return
  // father box keep relative
  target.style.position = 'relative'
  const { offsetHeight, offsetWidth } = target

  const element = h(USpin, {
    offsetHeight,
    offsetWidth,
  })
  const container = document.createElement('div')

  render(element, container)
  target.appendChild(container)
  map.set(target, container)
}

export function hidden(target: Element) {
  const container = map.get(target)
  target.removeChild(container)
  map.has(target) && map.delete(target)
}
