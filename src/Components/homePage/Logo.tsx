import React from "react";
import { getRandomIdx, getNextIdxCircularly } from "../utils/Quote";
import VerticalCarousel from "../utils/VerticalCarousel";
type Props = {};

const alters = [
  "高效",
  "搞笑",
  "好笑",
  "无效",
  "低效",
  "抵消",
  "有效",
  "笑笑",
  "高校",
];

export default function Logo({}: Props) {
  return (
    <div
      className="text-8xl antialiased select-none shrink-0 flex  color-change-base "
      title="这个Efficiency啊"
    >
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
// span 要有滚动的效果
