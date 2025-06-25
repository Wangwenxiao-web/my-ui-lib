import type { App } from "vue";
import MyInput from "./input";
import type { InputSize, InputType } from "./input";

export { MyInput };
export type { InputSize, InputType };

MyInput.install = (app: App) => {
  app.component(MyInput.name!, MyInput);
};

export default MyInput;
