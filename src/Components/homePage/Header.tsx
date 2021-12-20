import React, { ReactElement } from "react";
import styles from "./homePage.module.css";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param param0
 * 接受一个可选参数 loginRendered
 *
 * @returns
 * 根据参数渲染: 包含 一个 |两个 btn的 组件
 */
export default function Header(): ReactElement {
  // 形如 /login
  const currentPath = useLocation().pathname.slice(1);
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.leftTop}>
          <div className={styles.todoSvg}></div>
          <div className={styles.title}>高效ToDo</div>
        </div>
        <div className={styles.rightTop}>
          {/* 这会导致一个 向 /login网址的 跳转 */}
          {currentPath === "login" ? null : (
            <div className="ml-5">
              <Link to={"/login"}>
                <Button size="lg">登录</Button>
              </Link>
            </div>
          )}

          {/* 如果 currentPath 为"/login" 那么显示注册按钮 */}
          {currentPath === "login" ? (
            <div className="ml-5">
              <Link to="/registration">
                <Button variant="info" size="lg">
                  还没有账号?
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
