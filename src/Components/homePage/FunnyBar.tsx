import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * funnnyBar的 特殊功能 （输入+回车）
 */

const possibility = [
  "login",
  "登录",
  "main",
  "task",
  "change",
  "color",
  "home",
];

type isSomething = (val: string) => boolean | undefined;
function isLogin(value: string) {
  if (value === "login" || value === "登录") {
    return true;
  }
}

function isMain(value: string) {
  if (value === "main" || value === "task") {
    return true;
  }
}

function isChangeColorMode(value: string) {
  if (value === "color" || value === "change") {
    return true;
  }
}
const isHome: isSomething = function (value) {
  if (value === "home") {
    return true;
  }
};
type Props = {
  visible?: boolean;
  color?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
};
/**
 * 
使用了 mui布局组件的 仿搜索bar 是一个 absolute定位的bar
 */
export default function FunnyBar({ visible, color }: Props) {
  const [input, setInput] = useState("");
  /** 用于跳转的 工具 */
  const navigate = useNavigate();


  if (!visible && visible !== undefined) {
    return <div></div>;
  }

  return (
    <input
      autoFocus={true}
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          if (possibility.includes(input)) {
            if (isLogin(input)) {
              navigate("/login");
            }
            if (isMain(input)) {
              navigate("/main");
            }
            if (isChangeColorMode(input)) {
            }
            if (isHome(input)) {
              navigate("/");
            }
          }
          setInput("");
        }
      }}
    />
  );
}
