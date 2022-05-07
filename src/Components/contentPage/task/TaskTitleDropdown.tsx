import React, { useState } from "react";

import styles from "./TaskTitleDropdown.module.scss";

const dropdownConfig1 = {
  fourQudrants: "四象限" as const,
  timeline: "时间轴" as const,
};
const dropdownConfig2 = {
  all: "全部" as const,
  finished: "已完成" as const,
  unfinished: "未完成" as const,
};
type keysOfConfig1 = keyof typeof dropdownConfig1;
/**
 * 如果需要复用，这就不是必要的约束
 * 下拉菜单1 的值
 */
type valuesOfConfig1 = typeof dropdownConfig1[keysOfConfig1];

type keysOfConfig2 = keyof typeof dropdownConfig2;
/**
 *下拉菜单2 的值
 */
type valuesOfConfig2 = typeof dropdownConfig2[keysOfConfig2];
/**
 *
 * 这是 taskTitle中显示下拉菜单的 函数
 */
export default function TaskTitleDropdown() {
  /**
   * 下拉菜单1的状态
   */
  const [dropdown1State, setdropdown1]: [
    valuesOfConfig1,
    React.Dispatch<React.SetStateAction<valuesOfConfig1>>
  ] = useState(dropdownConfig1.fourQudrants as valuesOfConfig1);

  /**
   * [下拉菜单2的状态]
   */
  const [dropdown2State, setdropdown2]: [
    valuesOfConfig2,
    React.Dispatch<React.SetStateAction<valuesOfConfig2>>
  ] = useState(dropdownConfig2.unfinished as valuesOfConfig2);

  return (
    <div className={styles.container}>
      {/* 完成 /未完成的 下拉菜单 */}
      <div className="by_arrangement">{/*  */}</div>
      {/* 不同状态的下拉菜单 */}
      <div className="by_status"></div>
    </div>
  );
}
