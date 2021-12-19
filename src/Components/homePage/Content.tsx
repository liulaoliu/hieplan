import React, { ReactElement } from "react";
import styles from "./homePage.module.css";

export default function Content(): ReactElement {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.innerImage}>
          <div className={styles.content}>
            <h1 className={styles.white}>记录个人待办事项</h1>
            <h6 className={styles.white}>跟上时间的步伐 做时间的主人</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
