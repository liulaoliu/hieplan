//  保存


export enum containerClassNames {
  "task_like_container",
  "fixed_area_container",
}
//  要渲染的 block 的 ["path","文本内容","包含容器div的类名"]   头像以下, plugin 区域以上的区域
// path 和 渲染的图标的名称一致，图标类名 是使用 "path" +_icon 拼接而成
export const sidebarRegularBlocks = [
  ["task", "任务", containerClassNames[0]],
  ["note", "便签", containerClassNames[0]],
  ["project", "项目", containerClassNames[0]],
  ["position", "地点", containerClassNames[0]],
  ["label", "标签", containerClassNames[0]],
];

//plugin以下的区域(最底部)
export const sidebarFixedAreaBlocks = [
  ["search", "search", containerClassNames[1]],
  ["message", undefined, containerClassNames[1]],
  ["setting", undefined, containerClassNames[1]],
];
