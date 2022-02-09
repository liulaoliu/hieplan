import React, { ReactElement, useState } from "react";
import styles from "./TaskTitle.module.scss";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import FormattedDate from "./util/formattedDate";

interface Props {}

/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle({}: Props): ReactElement {
  // 一旦初始化 通过getDate暴露的值 就不会变
  const formattedDate = new FormattedDate().getDate();

  //  这是 状态 ,会变
  const [state, setstate] = useState(formattedDate);
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
          >
            今天
          </div>
        </div>
        <div className={styles.flex_container}>
          <div className={styles.w40_border_active}>日</div>
          <div className={styles.w40_border}>周</div>
          <div className={styles.w40_border}>月</div>
        </div>
      </div>
    </div>
  );
}
