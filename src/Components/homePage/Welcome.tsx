import React from "react";
import styles from "./homePage.module.css";
import Header from "./Header";
import Content from "./Content";
import Tail from "./Tail";

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
    0. everyday quote
 * 
 * 
 */

export default function Welcome() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Tail></Tail>
    </div>
  );
}
