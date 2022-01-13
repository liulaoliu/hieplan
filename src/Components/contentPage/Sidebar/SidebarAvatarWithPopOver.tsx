import React, { ReactElement, useState } from "react";

import PopOver from "../mayReUse/PopOver/PopOver";
import SidebarAvatar from "../UE/SidebarAvatar";

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
      <>
        <div className="title_bar">切换工作空间</div>
        <div className="content">
          <div className="row">我的私事</div>
          <div className="row">新建群组</div>
        </div>
        <div className="tail">
          <div className="item">搜索群组</div>
          <div className="item">群组管理</div>
        </div>
      </>
    </PopOver>
  );
};

export default SidebarAvatarWithPopOver;
