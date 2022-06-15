import React from "react";
import { getRandomIdx, getNextIdxCircularly } from "../utils/Quote";
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
function throttle(method: any, context: any) {
  clearTimeout(method.tid);
  method.tid = setTimeout(() => {
    method.call(context);
  }, 1000);
}

export default function Logo({}: Props) {
  const [state, setstate] = React.useState(getRandomIdx(alters.length));
  const [moved, setmoved] = React.useState(false);
  const [direction, setdirection] = React.useState<"up" | "down">("down");
  function manyFns() {
    setstate(getNextIdxCircularly(alters, state));
    setmoved(true);

    setTimeout(() => {
      setmoved(false);
    }, 1000);
  }

  return (
    <div
      onWheel={(e) => {
        clearTimeout((manyFns as unknown as any).tid);
        (manyFns as unknown as any).tid = setTimeout(() => {
          if (e.deltaY > 0) {
            // 向下滚动
            // setdirection("down");
            manyFns();
          } else {
            // 向上滚动
            // setdirection("up");
          }
        }, 800);
      }}
      className="text-8xl antialiased select-none shrink-0 flex "
      title="这个Efficiency啊"
    >
      <span className=" w-1/2  overflow-y-hidden flex-col h-28 ">
        <div
          className={
            moved === true
              ? "h-28 invisible -translate-y-full duration-75 ease-in "
              : "h-28 "
          }
        >
          {alters[state]}
        </div>
        <div
          className={
            moved === true
              ? "h-28 -translate-y-full duration-200 ease-in"
              : "h-28"
          }
        >
          {alters[state]}
        </div>
      </span>
      <span className="h-28">ToDo</span>
    </div>
  );
}

// 1 滚轮事件要节流 done
// span 要有滚动的效果
