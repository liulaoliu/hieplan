import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import styles from "./SidebarBlock.module.css";

export interface SidebarBlockProps {
  /**
   * OuterState 可能是自定义的state ,或者是应用级别的 Url
   */
  passWhenChangeByOuterState: {
    activeItemName: string;
    /**对changeByUrl,
     * 也正常传 (setItem....),内部自己会做清理
     */
    changeActiveItemFn: (value: React.SetStateAction<string>) => void;
    itemName: string;
  };

  height?: number;
  // 类型是一个bypass 并不准确
  icon?: ReactElement<IconType>;
  pic?: string;
  text?: string;
  iconText?: string;
  // 默认为true
  hasChildSidebar?: boolean;
  // 默认为false
  changeByUrl?: boolean;
  childSidebarContent?: ReactElement<any>;
}

/**
 *
 *
 * 自己维护状态，能在激动/平淡之间切换，是一个豁达的函数。
 * 可以渲染一个头像+文字;一个icon;一个icon+文字
 */
export default function SidebarBlock({
  height = 100,
  passWhenChangeByOuterState,
  icon,
  pic,
  text,
  iconText,
  hasChildSidebar = true,
  childSidebarContent,
  changeByUrl = false,
}: SidebarBlockProps): ReactElement {
  const { activeItemName, itemName, changeActiveItemFn } =
    passWhenChangeByOuterState;
  // 判断当前的这个 ITEM是不是 被激活
  const active = activeItemName === itemName;

  // 判断是否激活，如果激活，那么p_container背景颜色要深一点
  const pContainerClass = active
    ? styles.p_container_active
    : styles.p_container;

  //  根据state 选择 遮罩层是否存在 并读取SidebarBlock.module.css中的 样式
  //   如果active 为true ，那么 needCover 否则 no_display
  const contentCoverClass = active ? styles.cover_content : styles.no_display;

  // 根据state 让文字有不同的颜色
  const textColorClass = active ? styles.text_blue : styles.text_white;
  // 根据state 让图标(的容器)有不同的颜色
  const iconColorClass = active ? styles.icon_blue : styles.icon_white;
  // 根据state 让offcanvas 显示或隐藏
  const childSidebarClass = active
    ? styles.child_sidebar_show
    : styles.child_sidebar_hidden;

  // 当组件 状态由外部维护的 state决定，调用这个函数
  const useWhenChangeByOuterState = () => {
    activeOrNotNoUrl(itemName, activeItemName, changeActiveItemFn, changeByUrl);
  };

  return (
    <div
      className={pContainerClass}
      style={{
        height: height + "px",
      }}
      onClick={useWhenChangeByOuterState}
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
          // 条件渲染 icon
          // react Icon 提供了 color API ，说明可以通过 文字颜色 color 来改变图标颜色
          // 这是通过icon 传入的图标

          icon ? <div className={iconColorClass}>{icon}</div> : null
        }
        {
          // 条件渲染 icon 左边的文字
          iconText ? <div className={iconColorClass}>{iconText}</div> : null
        }
      </div>
      {
        // 条件渲染 contentCover

        hasChildSidebar ? (
          <div
            className={contentCoverClass}
            onClick={useWhenChangeByOuterState}
          >
            {/* 这是遮住content的cover */}
          </div>
        ) : null
      }

      {
        // 条件渲染 childSiderbar ，也就是条件渲染子侧边栏
        hasChildSidebar ? (
          <div
            className={childSidebarClass}
            onClick={(e) => {
              {
                /* 阻止offcanvas点击穿透到contentCover */
              }
              e.stopPropagation();
            }}
          >
            <div
              style={{
                color: "black",
              }}
            >
              {childSidebarContent}
            </div>
          </div>
        ) : null
      }
    </div>
  );
}

// 一个helper function 根据 本组件的itemName和 父容器的 activeName或者 appLevel的url 判断 是该激活还是平淡
function activeOrNotNoUrl(
  thisItemName: string,
  containerActiveItemName: string,
  containerStateChangeHandler: (val: React.SetStateAction<string>) => void,
  shouldDoNothingBecauseChangeByUrl: boolean
) {
  if (shouldDoNothingBecauseChangeByUrl) {
    containerStateChangeHandler("");
    return;
  }
  // changeByState
  if (containerActiveItemName !== thisItemName) {
    containerStateChangeHandler(thisItemName);
  } else {
    containerStateChangeHandler("");
  }
}
