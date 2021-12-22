import React, { ReactElement } from "react";
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
        <SidebarBlock iconUrl="task_icon" word="任务"></SidebarBlock>
        <SidebarBlock iconUrl="note_icon" word="便签"></SidebarBlock>
        <SidebarBlock iconUrl="project_icon" word="项目"></SidebarBlock>
        <SidebarBlock iconUrl="position_icon" word="地点"></SidebarBlock>
        <SidebarBlock iconUrl="label_icon" word="标签"></SidebarBlock>
      </div>

      <div className={styles.fixed_area_about}>
        <SidebarBlock
          iconUrl="search_icon"
          optionalContainerClassName="fixed_area_container"
        ></SidebarBlock>
        <SidebarBlock
          iconUrl="message_icon"
          optionalContainerClassName="fixed_area_container"
        ></SidebarBlock>
        <SidebarBlock
          iconUrl="setting_icon"
          optionalContainerClassName="fixed_area_container"
        ></SidebarBlock>
      </div>
    </div>
  );
}
