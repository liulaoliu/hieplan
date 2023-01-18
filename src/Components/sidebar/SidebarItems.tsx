import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "./SidebarData.config";

import st from "./sidebarItems.module.scss";
type Props = {
  /**
   * 是侧边栏的数据格式
   */
  data: sidebarData;
  /**
   * 控制侧边栏的宽度 大/小 切换
   */
  state: boolean;
};

export default function SidebarItems({ data, state }: Props) {
  return (
    <ul className="tw-select-none tw-p-0 tw-list-none">
      {data.map((item, idx: number) => {
        return (
          <li
            className="tw-cursor-pointer 
            tw-flex tw-justify-center 
            tw-items-center tw-h-[50px] "
            key={idx}
          >
            <NavLink
              className="tw-no-underline "
              // good point
              style={{ color: "inherit", display: "flex" }}
              to={"/main" + item.path}
              title={item.text}
            >
              <div className="blue-clickable tw-flex ">
                <div className="tw-flex tw-items-center">{<item.icon />}</div>
                {state ? (
                  <div className="tw-flex tw-items-center tw-ml-4 ">
                    <div>{item.text}</div>
                  </div>
                ) : null}
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
