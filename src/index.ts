import type { App } from "vue";
import { components } from "./components";

// 插件 install 方法
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

export default {
  install,
};

export * from "./components"; // 允许按需导入单个组件
