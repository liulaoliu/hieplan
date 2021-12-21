import React, { ReactElement } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./task.module.css";

interface Props {}
/**
 * @param
 * 暂时不接收
 * 
 * @returns
 *当/main被渲染，Sidebar保持显示（在屏幕左边)，根据/main后面的内容选择渲染其他内容 ，note,task,etc.
 具体会是什么查看路由配置即可
 *  */
export default function Main({}: Props): ReactElement {
  return (
    <div>
      <div className={styles.main_page_container}>
        <div className={styles.sidebar}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.main_page_content}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
