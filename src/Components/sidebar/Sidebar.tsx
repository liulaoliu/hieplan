import React, { ReactElement, useState } from "react";
import styles from "./Sidebar.module.scss";
import SidebarBlock from "./sidebarItem/SidebarBlock";

import { SIDEBARbottomDATA, SIDEBARREGULARDATA } from "./SidebarData.config";
import { useLocation } from "react-router-dom";
import SidebarBlockUrl from "./sidebarItem/SidebarBlockURL";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
interface Props {}

/**
 * 1.ROUTE 区， 这里渲染改变地址的组件
 * 2.PLUGIN 区，这里渲染插件
 */
export default function Sidebar({}: Props): ReactElement {
  //  *保存被激活的 Item 的状态，这一组和URL无关

  return (
    <div className={styles.w_200}>
      <div className={styles.route}>
        <div className={styles.icon_and_text}>
          <GoArrowLeft color="white" />
          <div>text</div>
        </div>
      </div>

      <div className={styles.plugin}></div>
    </div>
  );
}
