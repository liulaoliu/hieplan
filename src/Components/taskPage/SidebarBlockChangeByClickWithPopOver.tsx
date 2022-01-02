import React, { ReactElement, useState } from "react";

import PopOver from "./mayReUse/PopOver/PopOver";
import SidebarBlockChangeByClick from "./UE/SidebarBlockChangeByClick";

interface currentProp {
  children: ReactElement[] | ReactElement;
}

/**
 *
 * 状态用于在激活 /普通状态之间切换
 *
 */
export default function SidebarBlockChangeByClickWithPopOver({
  children,
}: currentProp): ReactElement {
  // const settingList = ["账号设置", "群组管理", "使用帮助", "退出登录"];
  const [status, setstate] = useState(false);

  const setActive = () => setstate(true);
  const setInactive = () => setstate(false);

  return (
    <PopOver active={status} setActive={setActive} setInactive={setInactive}>
      <SidebarBlockChangeByClick status={status}>
        {children}
      </SidebarBlockChangeByClick>
    </PopOver>
  );
}
