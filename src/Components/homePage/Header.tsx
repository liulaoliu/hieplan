import React, { ReactElement } from "react";
import styles from "./homePage.module.css";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param param0
 * 接受一个可选参数 renderedByWelcome
 *
 * @returns
 * 如果是 被Welcome 调用，那么在Welcom中调用时传入true,
 * 则 登录 btn'显示登录'，否则显示 ‘已有账号，去登录’
 */
export default function Header({
  renderedByWelcome,
}: {
  renderedByWelcome?: boolean;
}): ReactElement {
console.log(renderedByWelcome);




  // 形如 /login
  const currentPath = useLocation().pathname.slice(1);
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.leftTop}>
          <div className={styles.todoSvg}></div>
          <div className={styles.title}>
            <a href="/" className={styles.remove_a_style}>高效ToDo</a>
          </div>
        </div>
        <div className={styles.rightTop}>
          {/* 这会导致一个 向 /login网址的 跳转 */}
          {currentPath === "login" ? null : (
            <div className="ml-5">
              <Link to={"/login"}>
                {renderedByWelcome === true ? (
                  <Button size="lg">登录</Button>
                ) : (
                  <Button size="lg">已有账号 去登录</Button>
                )}
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
