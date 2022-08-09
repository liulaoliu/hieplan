import React from "react";
import { getRandomIdx, getNextIdxCircularly } from "../utils/quote/utils/index";
import VerticalCarousel from "../utils/VerticalCarousel";

type Props = {};
/**
 * 前面的内容 是Logo里的文字内容，后面的内容是logo的title的内容
 */
const alters = [
  "站着/这个Efficiency啊",
  "躺着/funny",
  "坐着/'我长的呢?''你长得有点好笑'",
  "佛系/要时刻清晰地避免无效输出",
  "摸鱼/低效不代表无效,但是或许有提升的空间?",
  "对抗/俄罗斯方块..",
  "顺从/那很好",
  "趴着/一笑而过吧",
  "跪着/这个，能不能挣钱?",
  "蹲着/你确定你真的能蹲一天吗?",
];

export default function Logo({}: Props) {
  return (
    <div className="tw-text-8xl tw-antialiased tw-select-none tw-shrink-0 tw-flex">
      <VerticalCarousel
        heightOfTheBlockInRemButNoRem={7}
        arr={alters}
        tailwindCssHeight={"tw-h-28"}
        tailwindCssWidth={"tw-w-48"}
      ></VerticalCarousel>
      <span className="tw-h-28">也是一天</span>
    </div>
  );
}

// 1 滚轮事件要节流 done
// 2 span里的文字 有滚动的效果
