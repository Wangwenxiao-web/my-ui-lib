import type { App } from 'vue'
import ripple from './ripple'

export default {
  install(app: App) {
    app.directive('ripple', ripple)
  },
}

export const vRipple = ripple 