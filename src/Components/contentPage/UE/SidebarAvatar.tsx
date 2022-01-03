import React, { ReactElement } from "react";
import styles from "./SidebarAvatar.module.css";

/**
 *
 * @param avatarUrl
 * 是图片资源地址
 * 和task.module.css" 需要搭配使用
 *
 * @returns
 */
export default function SidebarAvatar({
  avatarUrl,
  active,
}: {
  avatarUrl?: string;
  active: boolean;
}): ReactElement {
  return (
    <div
      className={
        styles.fixed_area_avatar + " " + styles.thinner_line + " cursor_pointer"
      }
    >
      <div>
        <div className={styles.avatar_hexagon_container}>
          <div className={styles.avatar_hexagon_layer1}>
            <div className={styles.avatar_hexagon_layer2}>
              {avatarUrl === undefined ? (
                <div className={styles.dummy_avatar}></div>
              ) : (
                <img src={avatarUrl} alt="头像" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            active
              ? styles.my_personal_stuff_active
              : styles.my_personal_stuff_inactive
          }
        >
          我的私事
        </div>
      </div>
    </div>
  );
}
