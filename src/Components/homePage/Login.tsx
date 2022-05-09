import { useTheme } from "@emotion/react";

import React, { ReactElement } from "react";
import ForgotPass from "../singIn/ForgotPass";

import SignIn from "../singIn/SignIn";
import SignUp from "../singIn/SignUp";

/**
 * 这是登录或者注册页面
 */
export default function Login({ mode }: { mode: string }): ReactElement {
  // console.log(mode, mode === "registration");
  //  mode  :registration, login ,password/forgot
  const p = useTheme();
  return (
    <div>
      {/*  下面是 登录/注册框 */}

      {mode === "registration" ? (
        <SignUp noShrink={true} />
      ) : mode == "login" ? (
        <SignIn noShrink={true} />
      ) : (
        <ForgotPass noShrink={true} />
      )}
    </div>
  );
}
