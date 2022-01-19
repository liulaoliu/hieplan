import React, { ReactElement, useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarBlock from "./sidebarItem/SidebarBlock";

import img from "../../assets/images/dummy_avatar.jpg";
import { SIDEBARbottomDATA } from "./SidebarData.config";
interface Props {}
/**
 *
 *
 *
 * 1.头像区 +offcanvas
 * 2.常用项区
 * 3.插件区 (可滚动)
 * 4.底部三狗 +offcanvas
 *
 */
export default function Sidebar({}: Props): ReactElement {
  //  *保存被激活的 Item 的状态，这一组和URL无关
  const [activeItem, setItem] = useState("");
  //  !保存被激活的 Item 的状态，这一组和URL有关
  const [activeUrl, setUrl] = useState("");

  return (
    <div className={styles.sidebar}>
      {/* 我是sidebar 以下是 sidebar items */}

      <div className={styles.thinner_line}>
        {/* 这是头像区 */}
        <SidebarBlock
          imgUrl={img}
          text="我的私事"
          itemName="avatar"
          activeItemName={activeItem}
          changeActiveItemFn={setItem}
        ></SidebarBlock>
      </div>
      <div className={styles.thinner_line}>这是 常用项区</div>
      <div className={styles.thinner_line}>这是插件区</div>

      <div className={styles.bottom}>
        {/* 这是底部 */}

        {SIDEBARbottomDATA.map((item: any, idx: number) => {
          return (
            <SidebarBlock
              key={idx}
              height={30}
              itemName={item.itemName}
              activeItemName={activeItem}
              changeActiveItemFn={setItem}
            >
              <div>文字</div>
              {<item.icon></item.icon>}
            </SidebarBlock>
          );
        })}
      </div>
    </div>
  );
}
