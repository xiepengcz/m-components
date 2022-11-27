import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";

import "./style.css";

import App from "./App.vue";
import router from "./router";
import { toLine } from "./utils";

// import chooseArea from "./components/chooseArea";
import mUI from "./components";

const app = createApp(App);
// 全局注册Icon 牺牲一点性能
// el-icon-xxx
for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(ElementPlus);
app.use(mUI);
app.use(router);
app.mount("#app");
