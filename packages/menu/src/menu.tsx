import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import * as Icons from "@element-plus/icons-vue";
import "./styles/index.scss";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中的菜单
    defaultActive: { type: String, default: "" },
    // 是否是路由模式
    router: { type: Boolean, default: "" },
    // 键名
    name: { type: String, default: "name" },
    children: { type: String, default: "children" },
    icon: { type: String, default: "icon" },
    index: { type: String, default: "index" },
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item[props.icon]!]; // ! 表示一定有
        // 处理 sub-menu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            );
          },
        };
        // 递归渲染 children
        if (item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        );
      });
    };
    let attrs = useAttrs();
    return () => {
      return (
        <el-menu
          class="menu-icon-svg"
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
