import React, { ReactElement } from "react";

import ContentLayout from "../contentLayout/ContentLayout";
import TaskTitle from "./coms/TaskTitle";

interface Props {}
/**
 *
 *
 * 这个包装函数的意义，就是为了把 要引入的内容 写死,省的还得在顶层引入，那样就太多太乱了
 * 还要维护状态?
 */
export default function Task({}: Props): ReactElement {
  const [state, setstate] = React.useState(false);
  //  这个东西应该是一个 箩筐，什么都能往里装，另外，一条task就是一条字符串呗。
  const [val, setval] = React.useState("");
  return (
    <ContentLayout
      title={<TaskTitle></TaskTitle>}
      content={
        <div className="tw-grid tw-bg-red-500 tw-w-full tw-h-full tw-grid-rows-2 tw-grid-cols-2 ">
          <div className="tw-bg-blue-500 tw-text-white tw-relative">
            <div
              className={
                state === false
                  ? `tw-absolute tw-h-16 tw-bg-red-500 tw-w-4/5 -tw-translate-y-[100vh] tw-transition-all tw-invisible`
                  : `tw-absolute tw-h-16 tw-bg-red-500 tw-w-4/5 -tw-translate-y-0 tw-transition-all `
              }
            >
              <input
                className="tw-text-black tw-w-4/5 tw-h-7 "
                type="text"
                value={val}
                onChange={(e) => {
                  e.preventDefault();
                  setval(e.target.value);
                }}
              />

              <button
                className="blue-clickable !tw-w-1/5"
                onClick={() => {
                  setstate(!state);
                }}
              >
                提交
              </button>
            </div>
            <div
              className="tw-h-16 tw-w-4/5 tw-bg-orange-500"
              onClick={() => {
                setstate(!state);
              }}
            >
              在这里添加任务
            </div>
            <li className="tw-flex">
              <button className="blue-clickable !tw-w-fit">完成</button>
              <div>任务1</div>
            </li>
          </div>
          <div className="tw-bg-blue-700  tw-text-white">2</div>
          <div className="tw-bg-blue-400  tw-text-white">3</div>
          <div className="tw-bg-blue-800 tw-text-white">4</div>
        </div>
      }
    ></ContentLayout>
  );
}
