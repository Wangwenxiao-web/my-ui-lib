import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MyUI from "./index";
// import { MyButton } from './components'; // 按需加载

const app = createApp(App);
app.use(MyUI);
// app.component('MyButton', MyButton)
app.mount("#app");
