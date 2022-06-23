import React from "react";

import Header from "./Header";
import Content from "./Content";
import Tail from "./Tail";
import Modal from "../utils/Modal";

/**
 *
 * 欢迎页面
 * 需要设置主题
 */
export default function Welcome() {
  return (
    <div className="tw-h-screen tw-flex tw-flex-col tw-justify-between color-change-base ">
      <div className="tw-h-[100px]">
        <Header></Header>
      </div>
      <div className="tw-h-[50vh] tw-relative ">
        <Content></Content>
      </div>

      <div className="tw-flex tw-justify-end   tw-pr-8">
        <Tail></Tail>
      </div>
    </div>
  );
}
