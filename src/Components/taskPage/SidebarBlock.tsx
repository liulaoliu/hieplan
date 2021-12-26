import React, { ReactElement } from "react";

import { Link } from "react-router-dom";
import PopOver from "./needName/PopOver/PopOver";
import styles from "./task.module.css";

interface sideBarBlock {
  iconClassName: string;
  containerClassName: string;
  word?: string | undefined;
  optionalContainerClassName?: string;
  componentRelatedUrl: string;
  handleTest: (currentUrl: string) => void;
  activeUrl: string;
  to?: string;
}

/**
 *
 * @param
 * iconUrl:iconClassName,是task.module.css中的对应放置svg的类的名字 ,word:显示的文字
 * optionalContainerClassName 若不是undefined, 那么就只渲染svg图标
 * @returns
 * 一个类名为 task_like_container的div
 * 包含一个:task_like_container >div;其内部是 一个 类名为iconClassName的div，用于显示svg icon;
 * 还包含一个内部文字为word 的div，用于显示文字
 * !和 taskPage 中的 task.module.css中的样式 必须组合使用
 *
 *
 *
 */
export default function SidebarBlock({
  iconClassName,
  word,
  containerClassName,
  componentRelatedUrl,
  handleTest,
  activeUrl,
  to,
}: sideBarBlock): ReactElement {
  let resultOfActiveJudgement = activeUrl === componentRelatedUrl;

  const settingList = ["账号设置", "群组管理", "使用帮助", "退出登录"];
  const onlyPassListItemsWhenRenderSettingPopOver =
    iconClassName.includes("setting") && settingList;
  const opliwrsp = onlyPassListItemsWhenRenderSettingPopOver;
  // 判断是不是setting
  const isRenderingSetting = iconClassName.includes("setting");
  // 判断是不是message
  const isRenderingMessage = iconClassName.includes("message");
  //  对 setting这个小块儿, 使用自定义高度的 popover
  let settingOrNot = iconClassName.includes("setting");
  const settingChildSiderBarHeight = 200;

  
  return (
    // 2. 根据当前 url （形如 main/xxxx） 判断是否被点击，被点击 就显示不同的颜色

    <div
      className={
        resultOfActiveJudgement
          ? "color_shoud_change"
          : "nothing_to_show#*need_a_good_name"
      }
    >
      {to === undefined ? (
        <PopOver
          height={settingOrNot ? settingChildSiderBarHeight : undefined}
          displayType={
            isRenderingMessage
              ? "sparseList"
              : isRenderingSetting
              ? "compactList"
              : undefined
          }
          compactList={opliwrsp ? settingList : undefined}
        >
          <div className={styles[iconClassName]}></div>
        </PopOver>
      ) : (
        <Link
          onClick={(e) => {
            handleTest(componentRelatedUrl);
          }}
          to={to}
          className={
            styles[containerClassName] + " hover_change_color_and_a_as_div"
          }
        >
          {/* (result? " color_shoud_change" : "xxxxx") */}
          <div className={styles[iconClassName]}></div>

          {word === undefined ? null : (
            <div className={styles.word_color_ddd}>{word}</div>
          )}
        </Link>
      )}
    </div>
  );
}
