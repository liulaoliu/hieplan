import React, { ReactElement, useState } from "react";

import PopOver from "./needName/PopOver/PopOver";
import styles from "./SidebarBlockChangeByUrl.module.css";

interface currentProp {
  children: ReactElement[] | ReactElement;
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
  const [status, setstate] = useState(false);

  const setActive = () => setstate(true);
  const setInactive = () => setstate(false);

  return (
    <div
      className={status ? styles.color_shoud_change : styles.normal}
      onClick={() => {
        if (status) {
          console.log("1-->0");

          setInactive();
        } else {
          console.log("0-->1");

          setActive();
        }
      }}
    >
      <PopOver active={status} setActive={setActive} setInactive={setInactive}>
        {children}
      </PopOver>
    </div>
  );
}
