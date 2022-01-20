import React, { ReactElement, SetStateAction } from "react";
import { FaTasks } from "react-icons/fa";
import { Link, useLocation, useResolvedPath } from "react-router-dom";
import SidebarBlock, { SidebarBlockProps } from "./SidebarBlock";
import styles from "./SidebarBlockUrl.module.css";

interface Props extends SidebarBlockProps {
  readonly changeByUrl?: true;
  passWhenChangeByOuterState: {
    activeItemName: string;
    /**
     * SidebarBlockUrl 此处必须传一个空函数
     */
    changeActiveItemFn: () => void;
    itemName: string;
  };
}
/**
 *
 * 复用SidebarBlock的逻辑 ,但是外层是Link
 * 也就是可以点击跳转
 * 注意 已经把 changeByUrl=true 写定了。
 */
export default function SidebarBlockUrl(props: Props): ReactElement {
  return (
    <Link
      to={props.passWhenChangeByOuterState.itemName}
      style={{
        textDecoration: "none",
      }}
    >
      <SidebarBlock
        {...props}
        passWhenChangeByOuterState={props.passWhenChangeByOuterState}
        height={30}
        changeByUrl={true}
        hasChildSidebar={false}
      ></SidebarBlock>{" "}
    </Link>
  );
}
