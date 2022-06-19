import React from "react";
import { getRandomIdx, getNextIdxCircularly } from "../utils/Quote";
import VerticalCarousel from "../utils/VerticalCarousel";
type Props = {};
/**
 * 前面的内容 是Logo里的文字内容，后面的内容是logo的title的内容
 */
const alters = [
  "高效/这个Efficiency啊",
  "搞笑/funny",
  "好笑/'我长的呢?''你长得有点好笑'",
  "无效/要时刻清晰地避免无效输出",
  "低效/低效不代表无效,但是或许有提升的空间?",
  "抵消/俄罗斯方块..",
  "有效/那很好",
  "笑笑/一笑而过吧",
  "高校/高校真的是学习的地方吗?",
];

export default function Logo({}: Props) {
  return (
    <div className="text-8xl antialiased select-none shrink-0 flex">
      <VerticalCarousel
        heightOfTheBlockInRemButNoRem={7}
        arr={alters}
        tailwindCssHeight={"h-28"}
        tailwindCssWidth={"w-48"}
      ></VerticalCarousel>
      <span className="h-28">ToDo</span>
    </div>
  );
}

// 1 滚轮事件要节流 done
// 2 span里的文字 有滚动的效果
