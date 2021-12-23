import React, { ReactElement } from "react";
import PopOver from "./needName/PopOver/PopOver";
import styles from "./task.module.css";

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
}: {
  avatarUrl?: string;
}): ReactElement {
  return (
    <PopOver>
      <div
        className={
          styles.fixed_area_avatar +
          " " +
          styles.thinner_line +
          " cursor_pointer"
        }
      >
        <div>
          <div className={styles.avatar_hexagon_container}>
            {/* 对 avatarUrl的判断,如果没有传入一个有效的资源地址，
          那么应该显示默认的图片 ,或者什么都不显示
          */}

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
          <div className={styles.my_personal_stuff}>我的私事</div>
        </div>
      </div>
    </PopOver>
  );
}
