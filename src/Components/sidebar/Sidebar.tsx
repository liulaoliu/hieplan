import React, { ReactElement } from "react";
import st from "./sidebar.module.scss";
import { SIDEBARREGULARDATA } from "./SidebarData.config";

import { NavLink } from "react-router-dom";
import ToggleSidebarIcon from "./ToggleSidebarIcon";
import SidebarItems from "./SidebarItems";
interface Props {}

export default function Sidebar({}: Props): ReactElement {
  /**
   * 是 mui提供的钩子 它是高性能的，原理是通过观测文档的媒体查询值发生更改，而不是使用定期轮询的方法来监听其结果
   * https://mui.com/zh/material-ui/react-use-media-query/。
   * 
   * 另外 @media(min-width:330px){…}
  指的是 width大于或等于min-width时，采用{…}样式。
   *
   */

  // 切换侧边栏宽度 200px/50px
  const [open, setopen] = React.useState(true);
  // 切换侧边栏 开/关
  const [show, setshow] = React.useState(true);

  /**
   * 如果用这个 没有平滑过渡
   */
  // if (!show) {
  //   return <div></div>;
  // }
  return (
    <div>
     

      <SidebarItems data={SIDEBARREGULARDATA} state={open}></SidebarItems>
    </div>
  );
}
