import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";

const components = [chooseArea, chooseIcon, trend];

// 这里用于全局引用
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
