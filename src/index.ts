import type { App, Plugin } from 'vue'
import { MyButton } from './components/Button'
import { MyInput } from './components/input'

// 导出所有组件
export * from './components/Button'
export * from './components/input'

// 组件列表
const components = [
  MyButton,
  MyInput
]

// 全量安装
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name!, component)
  })
}

export default {
  install,
  MyButton,
  MyInput
} as Plugin
