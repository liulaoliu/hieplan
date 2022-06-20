import React, { ReactElement } from "react";

/**
 * 这是登录或者注册页面
 */
export default function Login({ mode }: { mode: string }): ReactElement {
  // console.log(mode, mode === "registration");
  //  mode  :registration, login ,password/forgot
  return (
    <div>
      {/*  下面是 登录/注册框 */}
      这是登录页面
    </div>
  );
}
