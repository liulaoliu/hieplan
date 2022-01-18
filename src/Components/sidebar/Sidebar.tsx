import React, { ReactElement } from "react";
import styles from "./Sidebar.module.css";
import Profile from "./sidebarItem/Profile";

import { FaSearch, FaEnvelope, FaEllipsisH } from "react-icons/fa";
import img from "../../assets/images/dummy_avatar.jpg";
interface Props {}
/**
 *
 *
 *
 * 1.头像区 +offcanvas
 * 2.常用项区
 * 3.插件区 (可滚动)
 * 4.底部三狗 +offcanvas
 *
 */
export default function Sidebar({}: Props): ReactElement {
  return (
    <div className={styles.sidebar}>
      {/* 我是sidebar 以下是 sidebar items */}

      <div className={styles.thinner_line}>
        {/* 这是头像区 */}
        <Profile imgUrl={img} text="我的私事"></Profile>
      </div>
      <div className={styles.thinner_line}>这是 常用项区</div>
      <div className={styles.thinner_line}>这是插件区</div>
      <div className={styles.bottom}>
        {/* 这是底部 */}

        <Profile>
          <FaSearch />
        </Profile>
        <Profile>
          <FaEnvelope />
        </Profile>
        <Profile>
          <FaEllipsisH />
        </Profile>
      </div>
    </div>
  );
}
