import React from "react";
import styles from "./Welcome.module.css";
import Button from "react-bootstrap/Button";

/**
 * 
 * 
0. header
    1. 登录 btn
    2.btn转向一个 登录页面
    3. 图标
   
1.background
    1. 一张漂亮的图片

3.tail

 * 
 * 
 */

export default function Welcome() {
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
      <div className={styles.background}>
        <div className={styles.innerImage}>
          <div className={styles.content}>
            <h1 className={styles.white}>记录个人待办事项</h1>
            <h6 className={styles.white}>跟上时间的步伐 做时间的主人</h6>
          </div>
        </div>
      </div>
      <div className="tail">
        {/* 
         everyday quote
         */}
      </div>
    </div>
  );
}
