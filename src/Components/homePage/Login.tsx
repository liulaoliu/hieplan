import React, { ReactElement } from "react";
import styles from "./homePage.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { useLocation } from "react-router-dom";

// 这是登录或者注册页面
export default function Login(): ReactElement {
  //  根据当前URL的地址  来确定是应该显示 注册 ? 登录页面
  // 并且strip 掉 /login 中的 ‘/’
  const onLoginPage = useLocation().pathname.slice(1) === "login";

  return (
    <div className={styles.login_page}>
      {/*  上面应该还有个 header*/}
      <div className="login_header">
        {/* 根据调用Header时传入的参数 来确定 到底渲染什么 
            不准备更改
        */}
        <Header></Header>
      </div>
      {/*  下面是 登录/注册框 */}
      <div className={styles.login_or_registration}>
        <div className={styles.login_or_registration_image}>
          {/* 针对不同的页面 ，渲染不同的图片*/}
          {onLoginPage === true ? (
            <div className={styles.login_image} title="猜猜我是谁?"></div>
          ) : (
            <div title="猜猜我是谁?" className={styles.register_image}></div>
          )}
        </div>
        <div className={styles.form_panel}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>账户名称</Form.Label>
              <Form.Control type="email" placeholder="输入账户名称" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>密码</Form.Label>
              <Form.Control type="password" placeholder="输入密码" />
            </Form.Group>

            {onLoginPage === true ? (
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="记住我" />
              </Form.Group>
            ) : null}

            <Button variant="primary" type="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
