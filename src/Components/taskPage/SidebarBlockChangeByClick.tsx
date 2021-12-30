import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import PopOver from "./needName/PopOver/PopOver";
import styles from "./SidebarBlockChangeByUrl.module.css";

interface currentProp {
  children?: ReactElement[] | ReactElement;
}

/**
 *
 *
 * 被点击一次,激活
 * 再被点击一次, 变回正常状态
 *
 */
export default function SidebarBlockChangeByClick({
  children,
}: currentProp): ReactElement {
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
  const settingChildSiderBarHeight = 200;

  return (
    // 2. 根据当前 url （形如 main/xxxx） 判断是否被点击，被点击 就显示不同的颜色

    <div className={styles.normal}>
      <PopOver>{children}</PopOver>
    </div>
  );
}
