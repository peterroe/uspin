import { h, render } from 'vue'
import USpin from './USpin.vue'

interface propType {
  size: string
  color: string
  bgColor: string
}

const map = new Map<Element, Element>()

export function show(target: Element, {
  size,
  logoColor,
  bgColor,
} = {} as propType) {
  // return if already exist
  if (map.has(target)) return
  // father box keep relative
  target.style.position = 'relative'

  const element = h(USpin, {
    size,
    logoColor,
    bgColor,
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
