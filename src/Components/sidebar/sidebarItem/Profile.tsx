import React, { ReactElement, SyntheticEvent, useState } from "react";
import styles from "./Profile.module.css";

interface Props {
  imgUrl?: string;
  text?: string;
  children?: React.ReactNode;
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
}: Props): ReactElement {
  const [state, setstate] = useState(false);
  const changeState = () => {
    setstate(!state);
  };

  // 如果state 为true 那么是active状态
  const active = state === true;

  //  根据state 选择 遮罩层是否存在 并读取Profile.module.css中的 样式
  //   如果active 为true ，那么 needCover 否则 no_display
  const sidebarCoverClass = active ? styles.cover_left : styles.no_display;
  const contentCoverClass = active ? styles.cover_content : styles.no_display;

  // 根据state 让文字有不同的颜色
  const textColorClass = active ? styles.text_blue : styles.text_white;

  // 根据state 让offcanvas 显示或隐藏
  const offcanvasClass = active
    ? styles.offcanvas_show
    : styles.offcanvas_hidden;
  return (
    <div className={styles.p_container} onClick={changeState}>
      {imgUrl ? (
        <div>
          {/* 这是头像图片 */}
          <img src={imgUrl} alt="none" className={styles.pic} />
        </div>
      ) : null}
      {text ? <div className={textColorClass}>{text}</div> : null}

      {children ? (
        <div>
          {/* 这是通过children 传入的图标 */}
          {children}
        </div>
      ) : null}
      <div className={sidebarCoverClass} onClick={changeState}>
        {/* 这是遮住sidebar的cover */}
      </div>
      <div className={contentCoverClass} onClick={changeState}>
        {/* 这是遮住content的cover */}
      </div>
      {/* 阻止offcanvas点击穿透到contentCover */}
      <div
        className={offcanvasClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
}
