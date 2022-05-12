import { useTheme } from "@emotion/react";
import { Box, Divider, useMediaQuery, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import st from "./sidebar.module.scss";
import { SIDEBARREGULARDATA } from "./SidebarData.config";
// 不知为何 这个在dev模式会导致 极大的性能问题
import { FaHamburger } from "react-icons/fa";

import { NavLink } from "react-router-dom";
interface Props {}

export default function Sidebar({}: Props): ReactElement {
  const theme = useTheme();
  console.log(theme);

  /**
   * 是 mui提供的钩子 它是高性能的，原理是通过观测文档的媒体查询值发生更改，而不是使用定期轮询的方法来监听其结果
   * https://mui.com/zh/material-ui/react-use-media-query/
   *
   */
  const less1200 = useMediaQuery("(min-width:1200px)");
  const less600 = useMediaQuery("(min-width:600px");
  // 强制打开
  const [open, setopen] = React.useState(true);
  const sidebarState = open ? "200px" : "50px";
  // if (sidebarState === 0) {
  //   return <div></div>;
  // }
  return (
    <Box
      width={sidebarState}
      sx={{
        transition: "width 0.3s",
      }}
    >
      <div
        className={st.hamHeader}
        onClick={() => {
          setopen(!open);
        }}
      >
        <FaHamburger size={open ? "20px" : "30px"} color="orange"></FaHamburger>
      </div>
      <Divider></Divider>

      <ul className={st.clear_li_style}>
        {SIDEBARREGULARDATA.map((item, idx: number) => {
          return (
            <li className={st.li_c} key={idx}>
              <NavLink
                className={st.reset_link}
                // good point
                style={{ color: "inherit", display: "flex" }}
                to={item.path}
              >
                <div className={st.icon_and_text}>{<item.icon />}</div>
                {open ? (
                  <div className={st.icon_and_text}>
                    <Box
                      sx={{
                        color: `text.dark`,
                      }}
                    >
                      {item.text}
                    </Box>
                  </div>
                ) : null}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Divider></Divider>
    </Box>
  );
}
