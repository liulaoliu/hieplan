import React, { ReactElement, useState } from "react";
import PopOver from "./mayReUse/PopOver/PopOver";
import SidebarAvatar from "./UE/SidebarAvatar";

interface Props {}
/**
 *  状态用于在激活 /普通状态之间切换
 *传入两个child ,第一个是头像+文字描述,第二个是子侧边栏的内容
 */
const SidebarAvatarWithPopOver = function ({}: Props): ReactElement {
  const [status, setstate] = useState(false);

  const setActive = () => setstate(true);
  const setInactive = () => setstate(false);

  return (
    <PopOver active={status} setActive={setActive} setInactive={setInactive}>
      <SidebarAvatar active={status}></SidebarAvatar>
      <>子侧边栏</>
    </PopOver>
  );
};

export default SidebarAvatarWithPopOver;
