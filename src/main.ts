import { h, render } from 'vue'
import USpin from './USpin.vue'

interface propType {
  size: string
  logoColor: string
  bgColor: string
  opacity: number
}

const map = new Map<HTMLElement, HTMLElement>()

export function show(
  target: HTMLElement,
  { size, logoColor, bgColor, opacity } = {} as propType,
) {
  // return if already exist
  if (map.has(target)) return
  // father box keep relative
  target.style.position = 'relative'

  const element = h(USpin, {
    size,
    logoColor,
    bgColor,
    opacity,
  })
  const container = document.createElement('div')

  render(element, container)
  target.appendChild(container)
  map.set(target, container)
}

export function hide(target: HTMLElement) {
  const container = map.get(target)
  target.removeChild(container)
  map.has(target) && map.delete(target)
}
