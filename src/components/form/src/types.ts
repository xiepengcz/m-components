// 可配置表单
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
    | "upload";
  value: any; // 表单项的值
  label?: string; // 表单label
  prop?: string ; // 表单标识
  rules?:string;
}
