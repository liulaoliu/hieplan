import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
interface Props {}
/*
主界面
包含了侧边栏 + (侧边栏上被点击激活的)对应内容
*/
export default function Main({}: Props): ReactElement {
  /*
  该状态用于 维护 funnyBar 不在此处 渲染 提升到顶层
   */
  // const [funnyBarVisible, setFunnyBarVisible] = React.useState(false);
  // watchAltAndEnter(funnyBarVisible, setFunnyBarVisible);

  return (
    // className="tw-relative"
    //   注意，因为父级设置失误，这里用 height 100%之类的 设置没鸟用啊，气死我了，阿布阿布阿布阿布。
    <div className="tw-flex tw-h-screen">
      <div className="tw-w-36 tw-min-w-[9rem] tw-h-screen color-change-base">
        {/*  侧边栏 */}
        <Sidebar></Sidebar>
      </div>
      <div
        // 内容区
        className="tw-flex tw-w-full "
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
}
