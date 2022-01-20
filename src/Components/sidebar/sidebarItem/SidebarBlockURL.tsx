import React, { ReactElement, SetStateAction } from "react";
import { FaTasks } from "react-icons/fa";
import { Link, useLocation, useResolvedPath } from "react-router-dom";
import SidebarBlock, { SidebarBlockProps } from "./SidebarBlock";
import styles from "./SidebarBlockUrl.module.css";

interface Props {
  url: string;
}
type typeOfSidebarBlock = typeof SidebarBlock;

export default function SidebarBlockUrl(
  itemUrl: string,
  activeUrl: string
): ReactElement {
  const passWhenChangeByOuterState = {
    activeItemName: activeUrl,
    changeActiveItemFn: () => {},
    itemName: itemUrl,
  };
  return (
    <Link to={itemUrl}>
      <SidebarBlock
        height={30}
        icon={<FaTasks />}
        changeByUrl={true}
        passWhenChangeByOuterState={passWhenChangeByOuterState}
        hasChildSidebar={false}
      ></SidebarBlock>{" "}
    </Link>
  );
}
