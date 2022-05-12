import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Main.module.css";

interface Props {}
/*
主界面
包含了侧边栏 + (侧边栏上被点击激活的)对应内容
*/
export default function Main({}: Props): ReactElement {
  return (
    <div>
      <div className={styles.main_page_container}>
        <div>
          {/* 顶部 */}
          {/* 下方
                  侧边栏 
                  内容区

          */}
          {/* 顶部 */}
          <Box
            sx={{
              height: "50px",
              width: "100vw",
              // backgroundColor: "violet",
            }}
          ></Box>
          {/* 下方  */}
          <Box
            sx={{
              //  funny space
              height: "calc(100vh - 50px)",
              width: "100vw",
              display: "flex",
              flexDirection: "colunmn",
            }}
          >
            <Box>
              {/*  侧边栏 */}
              <Sidebar></Sidebar>
            </Box>
            <Box
              // 内容区
              sx={{
                backgroundColor: "info.main",
              }}
              className={styles.main_page_content}
            >
              <Outlet></Outlet>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
