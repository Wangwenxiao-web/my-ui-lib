import { createApp } from "vue";
import "./styles/variables.scss";
import App from "./App.vue";
import MyUI from "./index";
import directives from './directives'
// import { MyButton } from './components'; // 按需加载

const app = createApp(App);
app.use(MyUI);
app.use(directives);
// app.component('MyButton', MyButton)
app.mount("#app");
