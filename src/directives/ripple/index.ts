import type { Directive, DirectiveBinding } from 'vue'
import './style.scss'

export interface RippleOptions {
  color?: string
  zIndex?: number
}

export interface RippleHTMLElement extends HTMLElement {
  _ripple?: {
    enabled?: boolean
    centered?: boolean
    class?: string
  }
}

function createRipple(event: MouseEvent, el: RippleHTMLElement, binding: DirectiveBinding) {
  const rippleContainer = el.querySelector('.v-ripple__container')

  if (!rippleContainer) {
    return
  }

  const { clientX, clientY } = event
  const { left, top, width, height } = el.getBoundingClientRect()
  const radius = Math.sqrt(width * width + height * height) * 2
  const centerX = width / 2
  const centerY = height / 2

  const x = binding.value?.centered ? centerX : clientX - left
  const y = binding.value?.centered ? centerY : clientY - top

  const ripple = document.createElement('div')
  ripple.className = 'v-ripple__animation'
  ripple.style.width = ripple.style.height = `${radius}px`
  ripple.style.left = `${x - radius / 2}px`
  ripple.style.top = `${y - radius / 2}px`

  if (binding.value?.color) {
    ripple.style.backgroundColor = binding.value.color
  }

  rippleContainer.appendChild(ripple)

  ripple.addEventListener('animationend', () => {
    rippleContainer.removeChild(ripple)
  })
}

function createContainer(el: RippleHTMLElement) {
  const container = document.createElement('div')
  container.className = 'v-ripple__container'

  if (el._ripple?.class) {
    container.className += ` ${el._ripple.class}`
  }

  el.appendChild(container)
}

function mounted(el: RippleHTMLElement) {
  el._ripple = { enabled: true }
  createContainer(el)

  el.addEventListener('mousedown', (e: MouseEvent) => {
    if (!el._ripple?.enabled) return

    createRipple(e, el, {
      value: {
        color: 'rgba(0, 0, 0, 0.15)',
        zIndex: 999,
      },
    } as DirectiveBinding)
  })
}

function unmounted(el: RippleHTMLElement) {
  const rippleContainer = el.querySelector('.v-ripple__container')
  if (rippleContainer) {
    el.removeChild(rippleContainer)
  }
  delete el._ripple
}

export const vRipple: Directive = {
  mounted,
  unmounted,
}

export default vRipple 