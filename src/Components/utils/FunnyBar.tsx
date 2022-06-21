import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorModeStorage from "./colorModeStorage";
/**
 * funnnyBar的 特殊功能 （输入+回车）
 * specific input strings that can be deceived as a function
 */

const possibility = [
  "login",
  "登录",
  "main",
  "task",
  "change",
  "color",
  "home",
  "c",
  "h",
  "lg",
] as const;

type possibility = typeof possibility[number];

type isSomething = (val: possibility) => boolean | undefined;

function isLogin(value: possibility) {
  if (value === "login" || value === "登录" || value === "lg") {
    return true;
  }
}

function isMain(value: possibility) {
  if (value === "main" || value === "task") {
    return true;
  }
}

function isChangeColorMode(value: possibility) {
  if (value === "c" || value === "color" || value === "change") {
    return true;
  }
}
const isHome: isSomething = function (value) {
  if (value === "home" || value === "h") {
    return true;
  }
};
type Props = {
  visible?: boolean;
};
/**
 *
 * 重新制作的 “手造” 搜索栏,
 * 需要一个布尔状态**visible**来控制这个搜索栏的隐藏和显示。
 * 按下Alt+Enter 是切换这个状态的组合键。
 * 它依赖了 ReactRouter的上下文。
 */
export default function FunnyBar({ visible }: Props) {
  const [input, setInput] = useState("");
  /** 用于跳转的 工具 */
  const navigate = useNavigate();

  if (!visible && visible !== undefined) {
    return null;
  }
  /**
   *raise a warning when :
   1.possibility doesn't have an item that equals input
   2.input is in possiblity,but doesn't pass any isXXX fn .
   */
  function raiseWarning() {
    // 如果在调试模式下 报错
    //only works in dev mode
    if (process.env.NODE_ENV === "development") {
      console.log(`
  seems input value is not in the defined 'possibility' array.
  if this value intended not to trigger a function,then just walk away.
  if you wonder why your input doesn't work properly(like trigger a function).
  you may check:
  1. your value is not in possibility array
  2. your value is not checked adequately in your isXXX function, 
  and remeber to check this fn's parameter type (should be possibility instead of string)
  `);
    }
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
      min-w-[450px]
      h-14
      w-[30vw]
      z-[999]
      rounded-md
    "
    >
      <input
        className="yarn
        caret-purple-800
        absolute h-12 w-[30vw]  min-w-[450px]    rounded-md block outline-none
        text-2xl
        border-2
        border-rose-500
        pl-3
        text-black
        dark:bg-blue-900
        dark:border-indigo-500
        dark:text-white
        "
        autoFocus={true}
        value={input}
        onChange={(e) => {
          setInput(e.target.value as any);
        }}
        onKeyDown={(e) => {
          if (process.env.NODE_ENV === "development") {
            console.log(e.code, "keyCode");
          }
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            if (possibility.includes(input as any)) {
              // 如果找到在一个分支内 做 assertion的办法， 这个 ignore/expect-error可以去掉
              // @ts-expect-error
              if (isLogin(input)) {
                navigate("/login");
              } // @ts-ignore
              if (isMain(input)) {
                navigate("/main");
              } // @ts-ignore
              if (isChangeColorMode(input)) {
                ColorModeStorage.changeColorMode();
              } // @ts-ignore
              if (isHome(input)) {
                navigate("/");
              }
              raiseWarning();
            } else {
              raiseWarning();
            }
            setInput("");
          }
        }}
      />
    </div>
  );
}