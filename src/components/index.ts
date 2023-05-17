import { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import form from "./form";
import progress from "./progress";
import chooseTime from "./chooseTime";
import table from "./table";
import calendar from "./calendar";

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  form,
  progress,
  chooseTime,
  table,
  calendar
];

// 这里用于全局引用
export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
