import React, { ReactElement } from "react";

import TaskTitleCalendar from "./TaskTitleCalendar";

/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle(): ReactElement {
  return (
    <div className=" tw-w-full tw-flex">
      <TaskTitleCalendar />
    </div>
  );
}
