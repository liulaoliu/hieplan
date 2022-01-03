import React, { ReactElement, useState } from "react";

import PopOver from "../mayReUse/PopOver/PopOver";
import SidebarBlockChangeByClick from "../UE/SidebarBlockChangeByClick";

interface currentProp {
  children: ReactElement[];
}

/**
 *
 * 状态用于在激活 /普通状态之间切换。
 * 传入两个child ,第一个是图标,第二个是子侧边栏的内容
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
        {(children as ReactElement[]).slice(0)[0]}
      </SidebarBlockChangeByClick>
      {(children as ReactElement[]).slice(0)[1]}
    </PopOver>
  );
}
