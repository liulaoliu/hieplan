import React, { ReactElement, useState } from "react";
import styles from "./TaskTitle.module.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
interface Props {}

/**
 * 这是 显示在task的 title 区域的 函数
 */
export default function TaskTitle({}: Props): ReactElement {
  //  初始化一个date实例
  const d = new Date();
  //  用解构赋值的方式快速获取 年月日 ,注意月 的 bizarre behavior ，不会变
  const [year, month, day] = [d.getFullYear(), d.getMonth() + 1, d.getDate()];

  let formattedDate = `${year}_${month}_${day}`;

  //  这是 状态 ,会变
  const [state, setstate] = useState(formattedDate);
  return (
    <div className={styles.title_container}>
      <div className={styles.date}>{state}</div>
      <div className={styles.change_day}>
        <FaLongArrowAltLeft />
        <FaLongArrowAltRight />
      </div>
    </div>
  );
}
