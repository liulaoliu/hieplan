import React, { ReactElement, useState } from "react";
import SidebarAvatar from "../UE/SidebarAvatar";
import SidebarBlock from "./SidebarBlockChangeByUrl";

import styles from "./Sidebar.module.css";
import {
  sidebarRegularBlocks as SRB,
  sidebarFixedAreaBlocks as SFAB,
} from "./sidebarBlocks.config";
import SidebarBlockChangeByUrl from "./SidebarBlockChangeByUrl";
import SidebarAvatarWithPopOver from "./SidebarAvatarWithPopOver";
import SidebarBlockChangeByClickWithPopOver from "./SidebarBlockChangeByClickWithPopOver";

interface sidebarProp {
  avatarUrl?: string;
  pluginNames?: string[];
}

/**
侧边栏
包含了侧边栏上面的条目 
头像、设置、任务etc.
 */
export default function Sidebar({
  avatarUrl,
  pluginNames,
}: sidebarProp): ReactElement {
  const [currentActiveBlockUrl, setActiveBlockUrl] = useState("");

  function changeSidebarActiveBlockUrl(currentUrl: string) {
    setActiveBlockUrl(currentUrl);
  }

  return (
    <div className={styles.sidebar}>
      <SidebarAvatarWithPopOver></SidebarAvatarWithPopOver>
      <div
        className={styles.fixed_area_regular_stuff + " " + styles.thinner_line}
      >
        {SRB.map((block, idx) => {
          return (
            <SidebarBlock
              // containerClassName={block[2]}
              key={idx}
              changeSidebarBlockUrl={changeSidebarActiveBlockUrl}
              to={block[0]}
              activeUrl={currentActiveBlockUrl}
            >
              <div className={styles[block[0] + "_icon"]}></div>
              <div className={styles.word_color_ddd}>{block[1]}</div>
            </SidebarBlock>
          );
        })}
      </div>

      <div className={styles.optionalPluginPlace}></div>

      <div className={styles.fixed_area_about}>
        <SidebarBlockChangeByUrl
          changeSidebarBlockUrl={changeSidebarActiveBlockUrl}
          activeUrl={currentActiveBlockUrl}
          to={"search"}
        >
          <div className={styles[SFAB[0][0] + "_icon"]}></div>
        </SidebarBlockChangeByUrl>

        <SidebarBlockChangeByClickWithPopOver>
          <div className={styles[SFAB[1][0] + "_icon"]}></div>
          <div>
            <div className="title_bar">新消息</div>
            <div className="content"></div>
          </div>
        </SidebarBlockChangeByClickWithPopOver>

        <SidebarBlockChangeByClickWithPopOver>
          <div className={styles[SFAB[2][0] + "_icon"]}></div>
          <div>子侧边栏</div>
        </SidebarBlockChangeByClickWithPopOver>
      </div>
    </div>
  );
}
