import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import SidebarBlock, { SidebarBlockProps } from "./SidebarBlock";

interface Props extends SidebarBlockProps {
  readonly changeByUrl?: true;
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
      ></SidebarBlock>
    </Link>
  );
}
