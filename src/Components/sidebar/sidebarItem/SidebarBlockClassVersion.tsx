import React, { Component } from "react";
import styles from "./SidebarBlock.module.css";

export interface SidebarBlockClassProps {
  activeItemName: string;
  changeActiveItemFn: (value: React.SetStateAction<string>) => void;
  itemName: string;
  imgUrl?: string;
  text?: string;
  children?: React.ReactNode;
  height?: number;
}
interface State {}
/**
 *
 * deprecated
 * 自己维护状态，能在激动/平淡之间切换，是一个豁达的类
 *
 */
export default class SidebarBlockClass extends Component<SidebarBlockClassProps> {
  public activeItemName = this.props.activeItemName;
  public changeActiveItemFn = this.props.changeActiveItemFn;
  public itemName = this.props.itemName;
  public imgUrl = this.props.imgUrl;
  public text = this.props.text;
  public children = this.props.children;
  public height = this.props.height || 100;

  constructor(props: SidebarBlockClassProps) {
    super(props);
  }

  render() {
    // 判断当前的这个 ITEM是不是 被激活
    const active = this.props.activeItemName === this.props.itemName;

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
          height: this.height + "px",
        }}
        onClick={() => {
          SidebarBlockClass.activeOrNot(
            this.props.itemName,
            this.props.activeItemName,
            this.props.changeActiveItemFn
          );
        }}
      >
        {this.props.imgUrl ? (
          <div>
            {/* 这是头像图片 */}
            <img src={this.props.imgUrl} alt="none" className={styles.pic} />
          </div>
        ) : null}
        {this.props.text ? (
          <div className={textColorClass}>{this.props.text}</div>
        ) : null}

        {this.props.children ? (
          <div className={iconColorClass}>
            {/* react Icon 提供了 color API ，说明可以通过 文字颜色 color 来改变图标颜色 */}
            {/* 这是通过children 传入的图标 */}
            {this.props.children}
          </div>
        ) : null}

        {/* 这是遮住sidebar的cover */}
        {/* <div className={sidebarCoverClass} onClick={changeState}>
 
    </div> */}

        <div
          className={contentCoverClass}
          onClick={() => {
            SidebarBlockClass.activeOrNot(
              this.props.itemName,
              this.props.activeItemName,
              this.props.changeActiveItemFn
            );
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

  //   一个helper function 根据 本组件的itemName和 父容器的 activeName 判断 是该激活还是平淡

  private static activeOrNot(
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
}
