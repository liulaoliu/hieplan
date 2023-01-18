import React, { useState } from "react";
import FormattedDate from "../util/formattedDate";
import { pattern, patterns } from "../util/formattedDate";

/**
 *
 * 这是在taskTitle 中显示日期的组件
 */
export default function TaskTitleCalendar() {
  // 一旦初始化 通过getDate暴露的值 就不会变
  const formattedDate = new FormattedDate().getTodayDate();

  //  这是 状态 ,会变;默认state就是今天 的 字符串。
  const [state, setstate] = useState(formattedDate);

  // 这是 日期显示格式的状态，默认是显示到day 也就是YYYY-MM-DD;

  const [pattern, setpattern]: [
    pattern,
    React.Dispatch<React.SetStateAction<pattern>>
  ] = useState(patterns.day as pattern);

  //  根据pattern不同， 实际显示的日期(state)的格式要不同
  const displayState = FormattedDate.getDateByPattern(pattern, state);
  return (
    <div className="tw-flex">
      <div className=" tw-justify-center tw-flex-col tw-flex tw-w-56 tw-items-center tw-h-20 tw-text-white">
        {/* 显示date */}
        <div className="tw-cursor-pointer ">{displayState}</div>
      </div>
      <div className=" tw-w-40 tw-flex  tw-flex-col tw-justify-center  ">
        {/* 两个箭头 向前或者向后*/}
        <div className="tw-flex tw-justify-around">
          <div
            onClick={() => {
              /**初始化一个错误的值 这是向过去 */
              let newDate = "未正确的设置日期";
              newDate = FormattedDate.getPreviousDateByPattern(pattern, state);
              setstate(newDate);
            }}
          >
            <div
              className="blue-clickable
              !tw-w-20 tw-cursor-pointer
            "
            >
              pre
            </div>
          </div>
          <div
            onClick={() => {
              /**初始化一个错误的值  这是向未来*/
              let newDate = "未正确的设置日期";
              newDate = FormattedDate.getFutureDateByPattern(pattern, state);
              setstate(newDate);
            }}
          >
            <div className="blue-clickable !tw-w-20 tw-cursor-pointer">
              later
            </div>
          </div>
        </div>
      </div>
      <div className=" tw-w-60 tw-flex tw-justify-around tw-text-white">
        {/* 年月日 选项卡 */}
        <div className="tw-flex tw-flex-col tw-justify-center ">
          {/* 只在"今天"被点亮  */}
          <div
            onClick={() => {
              // 一旦“今天”被点击，state就回归默认状态
              setstate(formattedDate);

              setpattern("day");
            }}
            className="tw-cursor-pointer"
          >
            今天
          </div>
        </div>
        <div className="tw-flex tw-w-28 tw-justify-around">
          <div
            onClick={() => {
              // 把 显示模式设置成 按日 显示，默认就是

              setpattern("day");
            }}
            className="tw-flex tw-flex-col tw-justify-center tw-cursor-pointer"
          >
            日
          </div>
          <div
            onClick={() => {
              // 把 显示模式设置成 按周 显示

              setpattern("week");
            }}
            className="tw-flex tw-flex-col tw-justify-center tw-cursor-pointer"
          >
            周
          </div>
          <div
            onClick={() => {
              // 把 显示模式设置成 按月 显示

              setpattern("month");
            }}
            className="tw-flex tw-flex-col tw-justify-center tw-cursor-pointer"
          >
            月
          </div>
        </div>
      </div>
    </div>
  );
}
