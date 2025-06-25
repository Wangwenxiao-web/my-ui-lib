import type { App } from "vue";
import MyButton from "./button";
import type { ButtonType } from "./button";

export { MyButton };
export type { ButtonType };

MyButton.install = (app: App) => {
  app.component(MyButton.name!, MyButton);
};

export default MyButton;