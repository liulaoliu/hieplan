import React, { ReactElement } from "react";
import Sidebar from "../../sidebar/Sidebar";
import ContentLayout from "../contentLayout/ContentLayout";
import TaskTitle from "./TaskTitle";

// import styles from "./task.module.css";

interface Props {}
/**
 *
 *
 * 这个包装函数的意义，就是为了把 要引入的内容 写死,省的还得在顶层引入，那样就太多太乱了
 *
 */
export default function Task({}: Props): ReactElement {
  return (
    <div className="dark_side">
      <ContentLayout
        title={<TaskTitle></TaskTitle>}
        content={<div>content</div>}
      ></ContentLayout>
    </div>
  );
}
