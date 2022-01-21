import React, { ReactElement, useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarBlock from "./sidebarItem/SidebarBlock";
import img from "../../assets/images/dummy_avatar.jpg";
import { SIDEBARbottomDATA, SIDEBARREGULARDATA } from "./SidebarData.config";
import { useLocation } from "react-router-dom";
import SidebarBlockUrl from "./sidebarItem/SidebarBlockUrl";

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
  // const [activeUrl, setUrl] = useState("");
  //  ! 使用applevel的 url 而不是自己维护状态
  const location = useLocation().pathname.replace("/main/", "");
  return (
    <div className={styles.sidebar}>
      {/* 我是sidebar 以下是 sidebar items */}

      <div className={styles.thinner_line + " " + styles.top}>
        {/* 这是头像区 */}
        <SidebarBlock
          passWhenChangeByOuterState={{
            itemName: "avatar",
            activeItemName: activeItem,
            changeActiveItemFn: setItem,
          }}
          pic={img}
          text={"我的私事"}
        />
      </div>
      <div className={styles.thinner_line}>
        {/* 这是 常用项区 */}
        {SIDEBARREGULARDATA.map((item: any, idx: number) => {
          return (
            <SidebarBlockUrl
              passWhenChangeByOuterState={{
                changeActiveItemFn: setItem,
                itemName: item.itemName,
                activeItemName: location,
              }}
              icon={<item.icon size={"20px"} />}
              iconText={item.text}
              key={idx}
              height={50}
              hasChildSidebar={false}
            />
          );
        })}
      </div>
      <div className={styles.thinner_line + " " + styles.plugins}>
        {/* 这是插件区 */}
      </div>

      <div className={styles.bottom}>
        {/* 这是底部 */}

        {SIDEBARbottomDATA.map((item: any, idx: number) => {
          if (item.urlRelated) {
            return (
              <SidebarBlockUrl
                passWhenChangeByOuterState={{
                  changeActiveItemFn: setItem,
                  itemName: item.itemName,
                  activeItemName: location,
                }}
                icon={<item.icon size={"20px"} />}
                iconText={item.text}
                key={idx}
                height={50}
                hasChildSidebar={false}
              />
            );
          }
          return (
            <SidebarBlock
              key={idx}
              height={40}
              passWhenChangeByOuterState={{
                itemName: item.itemName,
                activeItemName: activeItem,
                changeActiveItemFn: setItem,
              }}
              icon={<item.icon></item.icon>}
            />
          );
        })}
      </div>
    </div>
  );
}
