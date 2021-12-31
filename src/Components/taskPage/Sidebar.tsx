import React, { ReactElement, useState } from "react";
import SidebarAvatar from "./SidebarAvatar";
import SidebarBlock from "./SidebarBlockChangeByUrl";

import styles from "./Sidebar.module.css";
import {
  sidebarRegularBlocks as SRB,
  sidebarFixedAreaBlocks as SFAB,
} from "./sidebarBlocks.config";
import SidebarBlockChangeByUrl from "./SidebarBlockChangeByUrl";
import SidebarBlockChangeByClick from "./SidebarBlockChangeByClick";

interface sidebarProp {
  avatarUrl?: string;
  pluginNames?: string[];
}

/**
 *
 * @param
 * 第一个参数是(如果用户设置了)头像图片的资源地址url,第二个参数是可能的插件的名称(暂定),也就是说应该考虑扩展性,
 * 侧边栏应该可以直接显示更多更多内容,对溢出显示区域的内容,
 * 应该可以滚动显示
 * 但是几个分栏区域是固定的，最上面的头像区，紧随头像区域的常规区，底部相关区
 * @returns
 * 渲染一个侧边栏
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
      <SidebarAvatar></SidebarAvatar>

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

        <SidebarBlockChangeByClick>
          <div className={styles[SFAB[1][0] + "_icon"]}></div>
        </SidebarBlockChangeByClick>

        <SidebarBlockChangeByClick>
          <div className={styles[SFAB[2][0] + "_icon"]}></div>
        </SidebarBlockChangeByClick>
      </div>
    </div>
  );
}
