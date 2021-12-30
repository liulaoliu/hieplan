import React, { ReactElement, useState } from "react";
import SidebarAvatar from "./SidebarAvatar";
import SidebarBlock from "./SidebarBlock";

import styles from "./Sidebar.module.css";

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

  // let matchResult=useMatch(currentUrl||"") !== null;

  function changeSidebarActiveBlockUrl(currentUrl: string) {
    setActiveBlockUrl(currentUrl);
  }
  enum containerClassNames {
    "task_like_container",
    "fixed_area_container",
  }

  const sidebarRegularBlocks = [
    ["task", "任务", containerClassNames[0]],
    ["note", "便签", containerClassNames[0]],
    ["project", "项目", containerClassNames[0]],
    ["position", "地点", containerClassNames[0]],
    ["label", "标签", containerClassNames[0]],
  ];

  const sidebarFixedAreaBlocks = [
    ["search", "search", containerClassNames[1]],
    ["message", undefined, containerClassNames[1]],
    ["setting", undefined, containerClassNames[1]],
  ];

  return (
    <div className={styles.sidebar}>
      {/*注意，这个区域的头像图片，应该是从服务器拉过来的 **/}
      {/*注意 这个 styles.1+" "+styles.2 ;就这么写!
       这是为了更简单的复用thinner_line 这个样式(完成比1px还细的线)

      */}
      <SidebarAvatar></SidebarAvatar>

      <div
        className={styles.fixed_area_regular_stuff + " " + styles.thinner_line}
      >
        {sidebarRegularBlocks.map((block, idx) => {
          return (
            <SidebarBlock
              // containerClassName={block[2]}
              key={idx}
              changeSidebarBlockUrl={changeSidebarActiveBlockUrl}
            
              to={block[0]}
              iconClassName={block[0] + "_icon"}
              word={block[1]}
              activeUrl={currentActiveBlockUrl}
            ></SidebarBlock>
          );
        })}
      </div>
      <div className={styles.optionalPluginPlace}></div>
      <div className={styles.fixed_area_about}>
        {/* {sidebarFixedAreaBlocks.map((block, idx) => {
          return (
            <SidebarBlock
              // containerClassName={block[2] as string}
              key={idx}
              to={block[1] as string}
              changeSidebarBlockUrl={changeSidebarActiveBlockUrl}
              componentRelatedUrl={`main/${block[0]}`}
              iconClassName={block[0] + "_icon"}
              activeUrl={currentActiveBlockUrl}
            ></SidebarBlock>
          );
        })} */}
      </div>
    </div>
  );
}
