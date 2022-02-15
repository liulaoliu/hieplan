import React, { ReactElement, useState } from "react";
import styles from "./Sidebar.module.scss";
import SidebarBlock from "./sidebarItem/SidebarBlock";
import img from "../../assets/images/dummy_avatar.jpg";
import { SIDEBARbottomDATA, SIDEBARREGULARDATA } from "./SidebarData.config";
import { useLocation } from "react-router-dom";
import SidebarBlockUrl from "./sidebarItem/SidebarBlockURL";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
interface Props {
  inWhatRoute: string;
}

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
export default function Sidebar({ inWhatRoute }: Props): ReactElement {
  //  *保存被激活的 Item 的状态，这一组和URL无关
  const [activeItem, setItem] = useState("");

  //  ! 使用appLevel的 url 而不是自己维护状态
  const location = useLocation().pathname.replace(`/${inWhatRoute}/`, "");
  // 增加一个 状态 用于控制侧边栏的宽度
  // 在 less 和 normal 之间切换
  // 我已经意识到less这个名字起得太奇怪了,但是我一时想不到好的。
  const [less, setwidth] = useState(false);
  //  决定 sidebar 的类名 ，这会让sidebar的宽度发生一些变化

  const sidebarClassName =
    less === false ? styles.sidebar_normal : styles.sidebar_less;
  return (
    <div className={sidebarClassName}>
      {/* 这是 切换侧边栏宽度的 按钮 */}
      <div
        className={styles.btn}
        onClick={() => {
          setwidth(!less);
        }}
      >
        {less ? <GoArrowRight /> : <GoArrowLeft />}
      </div>
      {/* 我是sidebar 以下是 sidebar items */}

      <div className={styles.top}>
        {/* 这是头像区 */}
        <SidebarBlock
          less={less}
          passWhenChangeByOuterState={{
            itemName: "avatar",
            activeItemName: activeItem,
            changeActiveItemFn: setItem,
          }}
          pic={img}
          text={"我的私事"}
        />
      </div>
      <div className={styles.regular}>
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
              iconText={less === false ? item.text : null}
              key={idx}
              height={50}
              hasChildSidebar={false}
            />
          );
        })}
      </div>
      <div className={styles.plugins}>{/* 这是插件区 */}</div>

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
              less={less}
              childSidebarContent={
                item.childSidebar ? (
                  <item.childSidebar />
                ) : (
                  <div>" warning!没提供子侧边栏内容"</div>
                )
              }
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
