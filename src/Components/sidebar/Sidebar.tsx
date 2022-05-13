import { useTheme } from "@emotion/react";
import { Box, Divider, useMediaQuery, Typography } from "@mui/material";
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
  const morethan1200 = useMediaQuery("(min-width:1200px)");
  const moreThan600 = useMediaQuery("(min-width:600px");
  // 切换侧边栏宽度 200px/50px
  const [open, setopen] = React.useState(true);
  // 切换侧边栏 开/关
  const [show, setshow] = React.useState(true);

  React.useEffect(() => {
    //  在 宽度小于1200的时候 缩小侧边栏
    if (morethan1200) {
      setopen(true);
    } else {
      setopen(false);
    }
  }, [morethan1200]);

  React.useEffect(() => {
    //  在 宽度小于600的时候 不显示侧边栏
    if (moreThan600) {
      setshow(true);
    } else {
      setshow(false);
    }
  }, [moreThan600]);
  const sidebarState = open ? "200px" : "50px";

  /**
   * 如果用这个 没有平滑过渡
   */
  // if (!show) {
  //   return <div></div>;
  // }
  return (
    <Box
      width={show ? sidebarState : "0px"}
      sx={{
        transition: "width 0.3s",
      }}
    >
      <Divider></Divider>
      <div
        onClick={() => {
          // 只在 宽度<600 且侧边栏关闭的时候起作用
          if (!moreThan600 && !open) {
            setshow(true);
          }
          // 只在 宽度<600 且侧边栏开启的时候起作用

          if (!moreThan600 && open) {
            setshow(false);
          } else {
            return;
          }
        }}
        style={{
          position: moreThan600 === false ? "fixed" : undefined,
          top: moreThan600 === false ? "0" : undefined,
        }}
      >
        <ToggleSidebarIcon state={open} setState={setopen}></ToggleSidebarIcon>
      </div>
      <Divider></Divider>

      <SidebarItems data={SIDEBARREGULARDATA} state={open}></SidebarItems>

      <Divider></Divider>
    </Box>
  );
}
