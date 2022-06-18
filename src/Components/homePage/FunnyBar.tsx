import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colorModeStorage from "../utils/colorModeStorage";
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
 * 重新制作的 “手造” 搜索栏
 */
export default function FunnyBar({ visible, color }: Props) {
  const [input, setInput] = useState("");
  /** 用于跳转的 工具 */
  const navigate = useNavigate();

  if (!visible && visible !== undefined) {
    return null;
  }

  return (
    <div
      className="absolute 
      left-0
      right-0
      top-0
      bottom-0
      m-auto
      my-[50vh]
      w-[30vw]
      min-w-[200px]
      h-auto
      z-[999]
      rounded-md
    "
    >
      <input
        className="
        caret-purple-800
        absolute h-14 w-[30vw]  min-w-[200px] rounded-md block outline-none
        border-2
        text-2xl
        pl-3
        bg-slate-500
        border-black
       dark:bg-blue-500
        dark:border-white
        
        "
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
                // 获取当前 mode
                const mode = colorModeStorage.getMode();

                if (mode === "light") {
                  colorModeStorage.setMode("dark");
                  document.documentElement.classList.add("dark");
                } else {
                  colorModeStorage.setMode("light");

                  document.documentElement.classList.remove("dark");
                }
              }
              if (isHome(input)) {
                navigate("/");
              }
            }
            setInput("");
          }
        }}
      />
    </div>
  );
}
