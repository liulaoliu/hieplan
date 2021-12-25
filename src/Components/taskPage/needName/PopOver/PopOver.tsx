import { AnyARecord } from "dns";
import React, { ReactElement, ReactPropTypes, useState } from "react";
import styles from "./PopOver.module.css";
interface PopOverProps {
  children: React.ReactNode;
  height?: number;
}

export default function PopOver({
  children,
  height,
}: PopOverProps): ReactElement {
  const [status, setstate] = useState(false);

  const setActive = () => setstate(true);
  const setInactive = () => setstate(false);
  const heightOverWrite = height === undefined ? "" : height + "px";

  return (
    <div
      onClick={setActive}
      className={styles.popover_container_as_place_holder}
    >
      {children}
      <div
        onClick={(e) => {
          e.stopPropagation();
          // console.log("popover_container Clicked(监测全局点击的utility)");

          setInactive();
        }}
        className={
          status === true ? styles.overlay_active : styles.overlay_inactive
        }
      ></div>
      {/* 子侧边栏 */}
      <div
        style={{ height: heightOverWrite }}
        onClick={(e) => {
          e.stopPropagation();
          // console.log("popover的overlay_active click(子侧边栏)");
        }}
        className={
          status === true ? styles.popover_active : styles.popover_inactive
        }
      ></div>
    </div>
  );
}
