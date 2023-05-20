export interface MenuItem {
  icon?:string;
  i?:any; // 处理后的图标
  name: string; // 导航名称
  index: string; // 导航标识
  children?: MenuItem[] // 子菜单
}