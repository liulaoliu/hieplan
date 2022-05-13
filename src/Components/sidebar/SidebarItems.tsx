import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./SidebarData.config";

import st from "./sidebarItems.module.scss";
type Props = {
  /**
   * 是侧边栏的数据格式
   */
  data: sidebarData;
  /**
   * 控制侧边栏的宽度 大/小 切换
   */
  state: boolean;
};

export default function SidebarItems({ data, state }: Props) {
  return (
    <ul className={st.clear_li_style}>
      {data.map((item, idx: number) => {
        return (
          <li className={st.li_c} key={idx}>
            <NavLink
              className={st.reset_link}
              // good point
              style={{ color: "inherit", display: "flex" }}
              to={"/main" + item.path}
              title={item.text}
            >
              <div className={st.icon_and_text}>{<item.icon />}</div>
              {state ? (
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
  );
}
