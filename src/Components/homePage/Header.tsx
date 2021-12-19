import React, { ReactElement } from "react";
import styles from "./homePage.module.css";
import Button from "react-bootstrap/Button";
export default function Header(): ReactElement {
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.leftTop}>
          <div className={styles.todoSvg}></div>
          <div className={styles.title}>高效ToDo</div>
        </div>
        <div className={styles.rightTop}>
          <Button size="lg">登录</Button>
        </div>
      </div>
    </div>
  );
}
