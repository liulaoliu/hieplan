import { AnyARecord } from "dns";
import React, { ReactElement, ReactPropTypes, useState } from "react";
import styles from "./PopOver.module.css";
interface PopOverProps {
  children: ReactElement[] ;

  active: boolean;
  setActive: () => void;
  setInactive: () => void;
}
/**
 * Popover依赖于使用该组件的容器组件中保存的 状态和处理函数
 *
 */

export default function PopOver({
  children,
  active,
  setActive,
  setInactive,
}: PopOverProps): ReactElement {
  return (
    <div
      onClick={setActive}
      className={styles.popover_container_as_place_holder}
    >
      {/* 图标区域 */}
      {(children as ReactElement[]).slice(0)[0]}

      {/* 遮罩整个页面的 overlay */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          // console.log("popover_container Clicked(监测全局点击的utility)");

          setInactive();
        }}
        className={
          active === true ? styles.overlay_active : styles.overlay_inactive
        }
      ></div>
      {/* 蓦然弹出的子侧边栏 */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          // console.log("popover的overlay_active click(子侧边栏)");
        }}
        className={
          active === true ? styles.popover_active : styles.popover_inactive
        }
      >
        {/* 子侧边栏区域 */}
        {(children as ReactElement[]).slice(0)[1]}
      </div>
    </div>
  );
}
