import React, { ReactElement } from "react";
import styles from "./task.module.css";

interface sidebarProp {
  avatarUrl?: string;
  pluginNames?: string[];
}

/**
 *
 * @param
 * 第一个参数是(如果用户设置了)头像图片的资源地址url,第二个参数是可能的插件的名称(暂定),也就是说应该考虑扩展性,
 * 侧边栏应该可以直接显示更多更多内容,对溢出显示区域的内容,
 * 应该可以滚动显示
 * 但是几个分栏区域是固定的，最上面的头像区，紧随头像区域的常规区，底部相关区
 * @returns
 * 渲染一个侧边栏
 */
export default function Sidebar({
  avatarUrl,
  pluginNames,
}: sidebarProp): ReactElement {
  return (
    <div className={styles.sidebar}>
      {/*注意，这个区域的头像图片，应该是从服务器拉过来的 **/}
      {/*注意 这个 styles.1+" "+styles.2 ;就这么写!
       这是为了更简单的复用thinner_line 这个样式(完成比1px还细的线)

      */}
      <div className={styles.fixed_area_avatar + " " + styles.thinner_line}>
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

      <div
        className={styles.fixed_area_regular_stuff + " " + styles.thinner_line}
      >
        <div className={styles.task_like_container}>
          <div className={styles.task_icon}></div>
          <div className={styles.word_color_ddd}>任务</div>
        </div>
        <div className={styles.task_like_container}>
          <div className={styles.note_icon}></div>
          <div className={styles.word_color_ddd}>便签</div>
        </div>
        <div className={styles.task_like_container}>
          <div className={styles.project_icon}></div>
          <div className={styles.word_color_ddd}>项目</div>
        </div>
        <div className={styles.task_like_container}>
          <div className={styles.position_icon}></div>
          <div className={styles.word_color_ddd}>地点</div>
        </div>
        <div className={styles.task_like_container}>
          <div className={styles.label_icon}></div>
          <div className={styles.word_color_ddd}>标签</div>
        </div>
      </div>

      <div className={styles.fixed_area_about}>
        <div className={styles.fixed_area_container}>
          <div className={styles.search_icon}></div>
        </div>

        <div className={styles.fixed_area_container}>
          <div className={styles.message_icon}></div>
        </div>

        <div
          className={styles.fixed_area_container + " " + styles.thinner_line}
        >
          <div className={styles.setting_icon}></div>
        </div>
      </div>
    </div>
  );
}
