import React, { ReactElement } from "react";
import styles from "./task.module.css";

interface sideBarBlock {
  iconUrl: string;
  word?: string | undefined;
  optionalContainerClassName?: string;
}

/**
 *
 * @param
 * iconUrl:iconClassName,是task.module.css中的对应放置svg的类的名字 ,word:显示的文字
 * optionalContainerClassName 若不是undefined, 那么就只渲染svg图标
 * @returns
 * 一个类名为 task_like_container的div
 * 包含一个:task_like_container >div;其内部是 一个 类名为iconClassName的div，用于显示svg icon;
 * 还包含一个内部文字为word 的div，用于显示文字
 * !和 taskPage 中的 task.module.css中的样式 必须组合使用
 *
 *
 *
 */
export default function SidebarBlock({
  iconUrl,
  word,
  optionalContainerClassName,
}: sideBarBlock): ReactElement {
  return (
    <div
      className={
        optionalContainerClassName === undefined
          ? styles.task_like_container
          : styles[optionalContainerClassName]
      }
    >
      <div className={styles[iconUrl]}></div>
      {word === undefined ? null : (
        <div className={styles.word_color_ddd}>{word}</div>
      )}
    </div>
  );
}
