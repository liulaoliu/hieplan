import React, { ReactElement, useState } from "react";
import styles from "./taskTitle.module.scss";
import TaskTitleCalendar from "./taskTitleCalendar";
import s from "./taskTitleDropdown.module.scss";
/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle(): ReactElement {
  return (
    <div className={styles.title_container}>
      <TaskTitleCalendar />
      <div className={s.container}>
        <div className="by_arrangement">
          <select name="" id="">
            <option value="1">11</option>
            <option value="2">22</option>
          </select>
        </div>
      </div>
    </div>
  );
}
