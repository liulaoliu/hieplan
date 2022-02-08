import React, { ReactElement } from "react";
import styles from "./ContentLayout.module.css";
interface Props {
  title?: ReactElement;
  content?: ReactElement;
}

/**
 *
 * 规定main 路由中，不同子页面要显示 标题和 内容
 * 接受的title和content是 要渲染的 子组件
 * 注意定义了高度
 * */
export default function ContentLayout({ title, content }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.title + " " + styles.border_bottom}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
