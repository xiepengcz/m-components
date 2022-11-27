import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";

const components = [chooseArea, chooseIcon];

// 这里用于全局引用
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
