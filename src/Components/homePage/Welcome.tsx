import React from "react";

import Header from "./Header";
import Content from "./Content";
import Tail from "./Tail";

/**
 *
 * 欢迎页面
 * 需要设置主题
 */
export default function Welcome() {
  return (
    <div className="h-screen flex flex-col justify-between color-change-base ">
      <div className="h-[100px]">
        <Header></Header>
      </div>
      <div className="h-[50vh] relative ">
        <Content></Content>
      </div>

      <div className="flex justify-end   pr-8">
        <Tail></Tail>
      </div>
    </div>
  );
}
