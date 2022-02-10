import React, { ReactElement, useState } from "react";
import styles from "./taskTitle.module.scss";
import TaskTitleCalendar from "./taskTitleCalendar";

/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle(): ReactElement {
  return (
    <div className={styles.title_container}>
      <TaskTitleCalendar />
    </div>
  );
}
