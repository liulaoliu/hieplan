import React, { ReactElement, useState } from "react";
import styles from "./TaskTitle.module.scss";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import FormattedDate from "./util/formattedDate";

interface Props {}

export default function TaskTitle({}: Props): ReactElement {
  // 一旦初始化 通过getDate暴露的值 就不会变
  const formattedDate = new FormattedDate().getTodayDate();

  //  这是 状态 ,会变;默认state就是今天 的 字符串。
  const [state, setstate] = useState(formattedDate);

  /**
   * 日期显示的三种格式 ,只能是全显示/显示年月/显示年
   */
  type pattern = "day" | "week" | "month";
  /**
   * pattern 数组 模拟enum
   */
  const patterns: pattern[] = ["day", "week", "month"];
  /**
   * 这是 显示在task的 title 区域的 函数
   */
  // 这是 日期显示格式的状态
  const [pattern, setpattern]: [
    pattern,
    React.Dispatch<React.SetStateAction<pattern>>
  ] = useState(patterns[0]);
  return (
    <div className={styles.title_container}>
      <div className={styles.date_container}>
        {/* 显示date */}
        {state}
      </div>
      <div className={styles.arrow_container}>
        {/* 两个箭头 */}
        <div
          className={styles.arrow}
          onClick={() => {
            const newDate = FormattedDate.dayMinus(state);
            setstate(newDate);
          }}
        >
          <FaLongArrowAltLeft />
        </div>
        <div
          className={styles.arrow}
          onClick={() => {
            const newDate = FormattedDate.dayPlus(state);
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
