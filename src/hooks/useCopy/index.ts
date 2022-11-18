import { ElMessage } from "element-plus";
// 复制文本
export const useCopy = (text: string) => {
  let input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
};
