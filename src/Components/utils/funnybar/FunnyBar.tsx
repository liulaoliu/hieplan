import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangeAppColorMode from "../ChangeAppColorMode";
import Modal, { Styles } from "react-modal";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
import customStyles from "./config/modalStyle";
import raiseWarning from "./util/raiseWarning";

import {
  funnybarHooks,
  activeFunnybarHooks,
  reportPossibleStrs,
} from "./hook/activeHooks/index";

// /**
//  * funnnyBar的 特殊功能 （输入+回车）
//  * specific input strings that can be deceived as a function
//  */

// const possibility = reportPossibleStrs(funnybarHooks)

// type possibility = typeof possibility[number];

// type isSomething = (val: possibility) => boolean | undefined;

// //done
// function isLogin(value: possibility) {
//   if (value === "login" || value === "登录" || value === "lg") {
//     return true;
//   }
// }
// //done
// function isMain(value: possibility) {
//   if (value === "main" || value === "task") {
//     return true;
//   }
// }
// //done
// function isChangeColorMode(value: possibility) {
//   if (value === "c" || value === "color" || value === "change") {
//     return true;
//   }
// }
// //done
// function isChangeColorModePreferOs(value: possibility) {
//   if (value === "os" || value == "跟随系统") {
//     return true;
//   }
// }
// //done
// const isHome: isSomething = function (value) {
//   if (value === "home" || value === "h") {
//     return true;
//   }
// };

type Props = {
  funnybarVisible: boolean;
  handleClose: any;
};
/**
 *
 * 重新制作的  搜索栏,
 * 需要一个布尔状态**visible**来控制这个搜索栏的隐藏和显示。
 * 按下Alt+Enter 是切换这个状态的组合键。
 * 它依赖了 ReactRouter的上下文。
 * 注意，他的z-index 是1
 */

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function FunnyBar({ funnybarVisible, handleClose }: Props) {
  /**
   * funnnyBar的 特殊功能 （输入+回车）
   * specific input strings that can be deceived as a function
   */

  const possibility = reportPossibleStrs(funnybarHooks);

  type possibility = typeof possibility[number];

  const [input, setInput] = useState("");
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  let funnybarFns = activeFunnybarHooks(funnybarHooks, input);

  if (!funnybarVisible && funnybarVisible !== undefined) {
    return null;
  }

  return (
    <Modal
      isOpen={funnybarVisible}
      style={customStyles}
      onRequestClose={() => {
        handleClose(false);
      }}
    >
      <div className="tw-rounded-md tw-flex tw-justify-center tw-items-center tw-p-0">
        <input
          className="
      tw-caret-purple-800
        tw-min-w-[450px]   tw-rounded-md 
        tw-outline-none
        tw-leading-[3.5rem]
        tw-text-4xl
        tw-pl-3
        tw-align-middle
        tw-h-14
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
                
                for (let i = 0; i < funnybarFns.length; i++) {
                  let currentItem = funnybarFns[i];
                  if (currentItem.judge() === false) {
                    continue;
                  } else {
                    currentItem.execTheCmd();
                    break;
                  }
                }
              } else {
                raiseWarning();
              }
              setInput("");
            }
          }}
          ref={setTriggerRef}
        />
        <span className=" tw-pl-14 tw-pr-8 tw-h-full tw-font-bold tw-select-none">
          Alt +Enter
        </span>
      </div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          好大一棵树挡住我啊
        </div>
      )}
    </Modal>
  );
}
