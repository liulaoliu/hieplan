import React from "react";
import styles from "./homePage.module.css";
import Header from "./Header";
import Content from "./Content";
import Tail from "./Tail";

/**
 * 
 * @param
 * 暂无
 * 
 * 
 * @returns
 内部渲染的组件如下:
 *
1. Header: 
*   1.1 登录 btn
*   1.2 btn转向一个 登录页面
*   1.3 图标
*   
*2.Content:
*   2.1 一张漂亮的图片
*
*3.Tail:
*   3.1 everyday quote (如果准备嵌入的话)
* 
* 
*/
export default function Welcome() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Header renderedByWelcome={true}></Header>
      <Content></Content>
      <Tail></Tail>
    </div>
  );
}
