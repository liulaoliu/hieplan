import React, { ReactElement } from "react";

import ContentLayout from "../contentLayout/ContentLayout";
import TaskTitle from "./coms/TaskTitle";
import RollingInput from "./util/RollingInput";
interface Props {}
/**
 *
 *
 * 这个包装函数的意义，就是为了把 要引入的内容 写死,省的还得在顶层引入，那样就太多太乱了
 * 还要维护状态?
 */
export default function Task({}: Props): ReactElement {
  //  这个东西应该是一个 箩筐，什么都能往里装，另外，一条task就是一条字符串呗。

  return (
    <ContentLayout
      title={<TaskTitle></TaskTitle>}
      content={
        <div className="tw-grid tw-bg-red-500 tw-w-full tw-h-full tw-grid-rows-2 tw-grid-cols-2 tw-min-w-[1000px] ">
          <div className="tw-bg-blue-500 tw-text-white ">
            <RollingInput></RollingInput>
          </div>
          <div className="tw-bg-blue-700  tw-text-white">2</div>
          <div className="tw-bg-blue-400  tw-text-white">3</div>
          <div className="tw-bg-blue-800 tw-text-white">4</div>
        </div>
      }
    ></ContentLayout>
  );
}

{
  /* <li className="tw-flex">
              <button className="blue-clickable !tw-w-fit">完成</button>
              <div>任务1</div>
            </li> */
}
