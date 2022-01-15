import React, { ReactElement, useState } from "react";

import PopOver from "../mayReUse/PopOver/PopOver";
import SidebarAvatar from "../UE/SidebarAvatar";
import styles from "./SidebarAvatarWithPopOver.module.css";
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
      {/* sawpo_container 是当前文件的 首字母缩写 */}
      <div className={styles.sawpo_container}>
        <div className={styles.title_bar}>切换工作空间</div>
        <div className={styles.content}>
          <div className={styles.row}>我的私事</div>
          <div className={styles.row}>新建群组</div>
        </div>
        <div className={styles.tail}>
          <div className={styles.item}>搜索群组</div>
          <div className={styles.vertical_line}></div>
          <div className={styles.item}>群组管理</div>
        </div>
      </div>
    </PopOver>
  );
};

export default SidebarAvatarWithPopOver;
