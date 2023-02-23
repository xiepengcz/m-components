import { defineComponent, PropType } from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ''
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: ''
    }
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    let renderMenu = (data:MenuItem[]) =>{
      return data.map((item:MenuItem)=>{
        // 每个菜单的图标
      })
    }
    return () =>{
      return (
        <div>menus</div>
      )
    }
  }
})