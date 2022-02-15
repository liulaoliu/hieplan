import React, { useState } from "react";
import FormattedDate from "./util/formattedDate";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { pattern, patterns } from "./util/formattedDate";
import styles from "./TaskTitleCalendar.module.scss";

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
    <div className={styles.calendar_contaienr}>
      <div className={styles.date_container}>
        {/* 显示date */}
        {displayState}
      </div>
      <div className={styles.arrow_container}>
        {/* 两个箭头 向前或者向后*/}
        <div
          className={styles.arrow}
          onClick={() => {
            /**初始化一个错误的值 这是向过去 */
            let newDate = "未正确的设置日期";
            newDate = FormattedDate.getPreviousDateByPattern(pattern, state);
            setstate(newDate);
          }}
        >
          <FaLongArrowAltLeft />
        </div>
        <div
          className={styles.arrow}
          onClick={() => {
            /**初始化一个错误的值  这是向未来*/
            let newDate = "未正确的设置日期";
            newDate = FormattedDate.getFutureDateByPattern(pattern, state);
            setstate(newDate);
          }}
        >
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className={styles.calendar_container}>
        {/* 年月日 选项卡 */}
        <div className={styles.m2}>
          {/* 只在"今天"被点亮  */}
          <div
            className={
              formattedDate === state
                ? styles.w40_border_active
                : styles.w40_border
            }
            onClick={() => {
              // 一旦“今天”被点击，state就回归默认状态
              setstate(formattedDate);
            }}
          >
            今天
          </div>
        </div>
        <div className={styles.flex_container}>
          <div
            className={
              pattern === "day" ? styles.w40_border_active : styles.w40_border
            }
            onClick={() => {
              // 把 显示模式设置成 按日 显示，默认就是
              if (pattern === "day") {
                return;
              }
              setpattern("day");
            }}
          >
            日
          </div>
          <div
            className={
              pattern === "week" ? styles.w40_border_active : styles.w40_border
            }
            onClick={() => {
              // 把 显示模式设置成 按周 显示
              if (pattern === "week") {
                return;
              }
              setpattern("week");
            }}
          >
            周
          </div>
          <div
            className={
              pattern === "month" ? styles.w40_border_active : styles.w40_border
            }
            onClick={() => {
              // 把 显示模式设置成 按月 显示
              if (pattern === "month") {
                return;
              }
              setpattern("month");
            }}
          >
            月
          </div>
        </div>
      </div>
    </div>
  );
}
