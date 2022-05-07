import React from "react";
import styles from "./homePage.module.css";
import Header from "./Header";
import Content from "./Content";
import Tail from "./Tail";
import { Grid } from "@mui/material";
import st from "./welcome.module.css";
/**
 *
 * 欢迎页面
 * 需要设置主题
 */
export default function Welcome() {
  return (
    <div className={st.container}>
      <div className={st.h}>
        <Header></Header>
      </div>
      <div className={st.c}>
        <Content></Content>
      </div>

      <div className={st.t}>
        <Tail></Tail>
      </div>
    </div>
  );
}
