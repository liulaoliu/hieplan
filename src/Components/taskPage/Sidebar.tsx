import React, { ReactElement, useState } from "react";
import SidebarAvatar from "./SidebarAvatar";
import SidebarBlock from "./SidebarBlock";
import styles from "./task.module.css";

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
  //
  const [currentActiveBlockUrl, setActiveBlockUrl] = useState("");

  // let matchResult=useMatch(currentUrl||"") !== null;

  function handleTest(currentUrl: string) {
    setActiveBlockUrl(currentUrl);
  }

  const sidebarRegularBlocks = [
    ["task", "任务"],
    ["note", "便签"],
    ["project", "项目"],
    ["position", "地点"],
    ["label", "标签"],
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
              key={idx}
              handleTest={handleTest}
              componentRelatedUrl={`main/${block[0]}`}
              to={block[0]}
              iconClassName={block[0] + "_icon"}
              word={block[1]}
              activeUrl={currentActiveBlockUrl}
            ></SidebarBlock>
          );
        })}
      </div>

      <div className={styles.fixed_area_about}>
        <SidebarBlock
       to={"test"}
          componentRelatedUrl={"test"}
          handleTest={handleTest}
          iconClassName="search_icon"
          optionalContainerClassName="fixed_area_container"
          activeUrl={currentActiveBlockUrl}
        ></SidebarBlock>
        <SidebarBlock
        to={"test"}
          handleTest={handleTest}
          componentRelatedUrl={"test"}
          iconClassName="message_icon"
          optionalContainerClassName="fixed_area_container"
          activeUrl={currentActiveBlockUrl}
        ></SidebarBlock>
        <SidebarBlock
        to={"test"}
          handleTest={handleTest}
          componentRelatedUrl={"test"}
          iconClassName="setting_icon"
          optionalContainerClassName="fixed_area_container"
          activeUrl={currentActiveBlockUrl}
        ></SidebarBlock>
      </div>
    </div>
  );
}
