import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import styles from "./SidebarBlock.module.css";

interface Props {
  activeItemName: string;
  changeActiveItemFn: (value: React.SetStateAction<string>) => void;
  itemName: string;
  children?: React.ReactNode;
  height?: number;
  // 一个bypass 并不准确
  icon?: ReactElement<IconType>;
  pic?: string;
  text?: string;
  iconText?: string;
}

/**
 *
 *
 * 自己维护状态，能在激动/平淡之间切换，是一个豁达的函数
 *
 */
export default function SidebarBlock({
  children,
  height = 100,
  itemName,
  activeItemName,
  changeActiveItemFn,
  icon,
  pic,
  text,
  iconText,
}: Props): ReactElement {
  // 判断当前的这个 ITEM是不是 被激活
  const active = activeItemName === itemName;

  // 如果state 为true 那么是active状态
  // const active = state === true;

  //  根据state 选择 遮罩层是否存在 并读取SidebarBlock.module.css中的 样式
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
      onClick={() => {
        activeOrNot(itemName, activeItemName, changeActiveItemFn);
      }}
    >
      <div className={styles.for_pic_and_text}>
        {
          // 条件渲染 头像图片
          pic ? <img className={styles.pic} src={pic} alt="none" /> : null
        }

        {
          // 条件渲染 头像下方的文字
          text ? (
            <div className={textColorClass + " " + styles.m_5}>{text}</div>
          ) : null
        }
      </div>

      <div className={styles.for_icon_and_text}>
        {
          // 条件渲染 icon 左边的文字
          iconText ? <div className={iconColorClass+" "+styles.m_5_horizontal}>{iconText}</div> : null
        }
        {
          // 条件渲染 icon
          // react Icon 提供了 color API ，说明可以通过 文字颜色 color 来改变图标颜色
          // 这是通过icon 传入的图标

          icon ? <div className={iconColorClass}>{icon}</div> : null
        }
      </div>

      <div
        className={contentCoverClass}
        onClick={() => {
          activeOrNot(itemName, activeItemName, changeActiveItemFn);
        }}
      >
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

// 一个helper function 根据 本组件的itemName和 父容器的 activeName 判断 是该激活还是平淡
function activeOrNot(
  thisItemName: string,
  containerActiveItemName: string,
  containerStateChangeHandler: (val: React.SetStateAction<string>) => void
) {
  if (containerActiveItemName !== thisItemName) {
    containerStateChangeHandler(thisItemName);
  } else {
    containerStateChangeHandler("");
  }
}
