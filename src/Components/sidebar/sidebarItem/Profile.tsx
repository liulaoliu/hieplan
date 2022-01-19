import React, { ReactElement, SyntheticEvent, useState } from "react";
import styles from "./Profile.module.css";

interface Props {
  activeItemName: string;
  changeActiveItem: any;
  imgUrl?: string;
  text?: string;
  children?: React.ReactNode;
  height?: number;
  itemName: string;
}

/**
 *
 * 自己维护状态，能在激动/平淡之间切换，是一个豁达的函数
 *
 */
export default function Profile({
  imgUrl,
  text,
  children,
  height = 100,
  itemName,
  activeItemName,
  changeActiveItem,
}: Props): ReactElement {
  // 判断当前的这个 ITEM是不是 被激活
  const active = activeItemName === itemName;

  // 如果state 为true 那么是active状态
  // const active = state === true;

  //  根据state 选择 遮罩层是否存在 并读取Profile.module.css中的 样式
  //   如果active 为true ，那么 needCover 否则 no_display
  const sidebarCoverClass = active ? styles.cover_left : styles.no_display;
  const contentCoverClass = active ? styles.cover_content : styles.no_display;

  // 根据state 让文字有不同的颜色
  const textColorClass = active ? styles.text_blue : styles.text_white;
  // 根据state 让图标(的容器)有不同的颜色
  const iconColorClass = active ? styles.icon_blue : styles.icon_white;
  // 根据state 让offcanvas 显示或隐藏
  const childSidebarClass = active
    ? styles.child_sidebar_show
    : styles.child_sidebar_hidden;

  return (
    <div
      className={styles.p_container}
      style={{
        height: height + "px",
      }}
      onClick={changeActiveItem}
    >
      {imgUrl ? (
        <div>
          {/* 这是头像图片 */}
          <img src={imgUrl} alt="none" className={styles.pic} />
        </div>
      ) : null}
      {text ? <div className={textColorClass}>{text}</div> : null}

      {children ? (
        <div
          className={iconColorClass}
          style={{
            zIndex: 66666,
          }}
        >
          {/* react Icon 提供了 color API ，说明可以通过 文字颜色 color 来改变图标颜色 */}
          {/* 这是通过children 传入的图标 */}
          {children}
        </div>
      ) : null}

      {/* 这是遮住sidebar的cover */}
      {/* <div className={sidebarCoverClass} onClick={changeState}>
   
      </div> */}

      <div className={contentCoverClass} onClick={changeActiveItem}>
        {/* 这是遮住content的cover */}
      </div>
      {/* 阻止offcanvas点击穿透到contentCover */}
      <div
        className={childSidebarClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
}
