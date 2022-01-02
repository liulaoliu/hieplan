import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import styles from "./SidebarBlockChangeByUrl.module.css";

interface sidebarBlock {
  changeSidebarBlockUrl: (currentUrl: string) => void;
  activeUrl: string;
  to: string;
  children: ReactElement[] | ReactElement;
}

/**
 *
 *
 * 内含链接跳转组件 ，点击会导致url变化。
 * 依赖 状态值:activeUrl和通知函数:changeSidebarBlockUrl,用于区分 被选中的 和 未被选中 的 sidebarBlock。
 *
 *
 */
export default function SidebarBlockChangeByUrl({
  changeSidebarBlockUrl,
  activeUrl,
  to,
  children,
}: sidebarBlock): ReactElement {
  const active = activeUrl.includes(to);

  return (
    <div className={active ? styles.color_shoud_change : styles.normal}>
      <Link
        onClick={(e) => {
          changeSidebarBlockUrl(to);
        }}
        to={to}
        className={
          styles["task_like_container"] +
          " " +
          styles.hover_change_color_and_a_as_div
        }
      >
        {children}
      </Link>
    </div>
  );
}
