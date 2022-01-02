import React, { ReactElement, useState } from "react";
import PopOver from "./mayReUse/PopOver/PopOver";
import SidebarAvatar from "./UE/SidebarAvatar";

interface Props {}
/**
 *  状态用于在激活 /普通状态之间切换
 *
 */
const SidebarAvatarWithPopOver = function ({}: Props): ReactElement {
  const [status, setstate] = useState(false);

  const setActive = () => setstate(true);
  const setInactive = () => setstate(false);

  return (
    <PopOver active={status} setActive={setActive} setInactive={setInactive}>
      <SidebarAvatar active={status}></SidebarAvatar>
    </PopOver>
  );
};

export default SidebarAvatarWithPopOver;
