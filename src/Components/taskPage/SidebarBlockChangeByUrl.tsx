import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import PopOver from "./needName/PopOver/PopOver";
import styles from "./SidebarBlockChangeByUrl.module.css";

interface sidebarBlock {
  changeSidebarBlockUrl: (currentUrl: string) => void;
  activeUrl: string;
  to: string;
  children?: ReactElement[] | ReactElement;
}

/**
 *
 *
 * 内含链接跳转组件 ，点击会导致url变化
 * 依赖 状态值:activeUrl和通知函数:changeSidebarBlockUrl,用于区分 被选中的 和 未被选中 的 sidebarBlock
 *
 *
 */
export default function SidebarBlockChangeByUrl({
  changeSidebarBlockUrl,
  activeUrl,
  to,
  children,
}: sidebarBlock): ReactElement {
  let resultOfActiveJudgement = activeUrl.includes(to);

  const settingList = ["账号设置", "群组管理", "使用帮助", "退出登录"];
  // const onlyPassListItemsWhenRenderSettingPopOver =
  //   iconClassName.includes("setting") && settingList;
  // const opliwrsp = onlyPassListItemsWhenRenderSettingPopOver;
  // 判断是不是setting
  // const isRenderingSetting = iconClassName.includes("setting");
  // 判断是不是message
  // const isRenderingMessage = iconClassName.includes("message");
  //  对 setting这个小块儿, 使用自定义高度的 popover
  // let settingOrNot = iconClassName.includes("setting");


  return (
   

    <div
      className={
        resultOfActiveJudgement ? styles.color_shoud_change : styles.normal
      }
    >
      {to === undefined ? (
        <PopOver>{children}</PopOver>
      ) : (
        <Link
          onClick={(e) => {
            changeSidebarBlockUrl(to);
          }}
          to={to}
          className={
            styles["task_like_container"] +
            " " +
            styles.hover_change_color_and_a_as_div
          }
        >
          {children}
        </Link>
      )}
    </div>
  );
}
