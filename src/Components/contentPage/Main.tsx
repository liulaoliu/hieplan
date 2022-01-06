import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
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
          <Sidebar></Sidebar>
        </div>
        <div className={styles.main_page_content}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
