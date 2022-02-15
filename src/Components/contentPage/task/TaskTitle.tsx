import React, { ReactElement } from "react";

import styles from "./TaskTitle.module.scss";
import TaskTitleCalendar from "./TaskTitleCalendar";
import TaskTitleDropdown from "./TaskTitleDropdown";
import TaskTitleOffcanvas from "./TaskTitleOffcanvas";

/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle(): ReactElement {
  return (
    <div className={styles.title_container}>
      <TaskTitleCalendar />
      <TaskTitleDropdown />
      <TaskTitleOffcanvas />
    </div>
  );
}
