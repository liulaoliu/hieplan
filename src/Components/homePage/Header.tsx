import React, { ReactElement } from "react";
import styles from "./homePage.module.css";
// import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import st from "./header.module.css";

export default function Header(): ReactElement {
  //  默认情况下，用在 Welcome页面 ，所以为true, 显示

  return (
    <div className={st.c}>
      <div className={st.l}>
          登录
      </div>
      <div className={st.r}>
        {/* 这是 深浅模式切换的按钮start */}

        {/* 这是 深浅模式切换按钮  ending*/}
      </div>
    </div>
  );
}
