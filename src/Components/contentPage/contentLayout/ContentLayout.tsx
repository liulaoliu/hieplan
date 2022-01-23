import React, { ReactElement } from "react";
import styles from "./ContentLayout.module.css";
interface Props {
  title?: ReactElement;
  content?: ReactElement;
}

export default function ContentLayout({ title, content }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.title + " " + styles.border_bottom}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
