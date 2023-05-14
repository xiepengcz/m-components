import { actions } from "./../../../../views/notification/data";
// 可配置表单

import { RuleItem } from "./rule";
import { CSSProperties } from "vue";

// 表单每一项的配置项
export interface FormOptions {
  // 表单显示的元素
  type:
    | "autocomplete"
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "rate"
    | "select"
    | "option"
    | "select-v2"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
    | "editor";
  value: any; // 表单项的值
  label?: string; // 表单label
  prop?: string; // 表单标识
  rules?: RuleItem[]; // 表单项的验证规则
  placeholder?: string; // 表单项的占位符
  attrs?: {
    // 表单元素特有的属性
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
    placeholder?: string;
    style?: CSSProperties;
  };
  children?: FormOptions[];
  // 处理上传组件的属性和方法
  uploadAttrs?: {
    action: string;
    headers?: object;
    method?: "post" | "put";
    multiple?: boolean;
    data?: any;
    name?: string;
    withCredentials?: boolean;
    showFileList?: boolean;
    drag?: boolean;
    accept?: string;
    listType?: "text" | "picture" | "picture-card";
    autoUpload?: boolean;
    disabled?: boolean;
    limit?: number;
  };
}
