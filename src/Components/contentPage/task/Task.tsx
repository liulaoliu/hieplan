import React, { ReactElement } from "react";

import ContentLayout from "../contentLayout/ContentLayout";
import TaskTitle from "./TaskTitle";



interface Props {}
/**
 *
 *
 * 这个包装函数的意义，就是为了把 要引入的内容 写死,省的还得在顶层引入，那样就太多太乱了
 * 还要维护状态?
 */
export default function Task({}: Props): ReactElement {
  return (
    <div >
      <ContentLayout
        title={<TaskTitle></TaskTitle>}
        content={<div>content</div>}
      ></ContentLayout>
    </div>
  );
}
