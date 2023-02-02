import React, { ReactElement } from "react";
import {
  getNextIdxCircularly,
  getPreviousIdxCircularly,
} from "./quote/utils/index";

/**
 * https://juejin.cn/post/7017682613959655461 看这里
 */
type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * https://juejin.cn/post/7017682613959655461 还是看这里
 */
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

interface Props {
  /** things to show in the carousel */
  arr: string[];
  /**
   * like 7rem is the height ,input 7.
   * it can tell how 'long' should the carousel scroll once
   */
  heightOfTheBlockInRemButNoRem: number;
  /**
   * pls use tw-h-28 like format,
   * tw- is the prefix.
   * because it has connection with rem.
   * and this component use the total height expressed in rem as the interval to
   * control the scroll behavior
   */
  tailwindCssHeight: string;
  /**
   * pls use tw-w-40 like format,
   * tw- is the prefix.
   */
  tailwindCssWidth: string;
}
/**
 * tw- 是后加的，在传入 高度宽度的时候可能会出现bug.
 */
export default function VerticalCarousel({
  arr,
  tailwindCssHeight,
  tailwindCssWidth,
  heightOfTheBlockInRemButNoRem,
}: Props) {
  /**
   * 这个状态控制 要滚动的高度
   * this **state** controls the scroll height of this component
   */
  const [state, setstate] = React.useState(0);

  /**
   *
   * @param arr array that contains the carousel items
   * @param interval carousel height (unit is rem)
   * @returns an array contains :
   * 1.possible translateY height.
   * 2.the specific css which depends on **tailwindcss** and is generated
   * in accordance with tailwindcss's css rules.
   */
  function createTranslateHeightAndTailwindCss(
    arr: any[],
    interval: number
  ): [number[], string] {
    const start = 0;
    const end = (arr.length - 1) * interval;
    const array = Array((end - start) / interval + 1).fill("null");

    const translateNums = array.map((item, idx) => {
      return idx * interval;
    });

    let str = String.raw``;
    translateNums.forEach((item, idx) => {
      str += String.raw`.-tw-translate-y-\[${item}rem\] {
          --tw-translate-y: -${item}rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
            scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }`;
    });

    return [translateNums, str];
  }
  const [translateYHeight, cssText] = createTranslateHeightAndTailwindCss(
    arr,
    heightOfTheBlockInRemButNoRem
  );
  /**
   * css text to be inserted into following style tab
   */
  const insertedCss = String.raw`${cssText}`;

  /**tailwind css;
   * ∵ h-1	height: 0.25rem; 4px.
   * ∴ h-28 height: 0.25 *28 =7rem;
   * this is the tailwind example showing the relationship between
   *  tailwind utility class and real rem/px
   */
  const tailwindHeightRemUnit = 0.25;

  /**
   *  when wheel scrolled ,this fn change state ,thus scroll behavior triggered.
   * @param direction a number,positive means upward scroll ,negative means downward scroll;
   * when click(or ctrl + click) ,pass in a positive number(or a negative one)
   * to simulate the scroll behavior's e.deltaY
   */
  function scrollHanlder(direction: number) {
    if (direction > 0) {
      setstate(getNextIdxCircularly(arr, state));
    } else {
      setstate(getPreviousIdxCircularly(arr, state));
    }
  }

  /**这个 组件的宽度 ,默认w-48, 使用了tailwindcss 的utility */
  const width =
    tailwindCssWidth === undefined ? " tw-w-48" : " " + tailwindCssWidth;
  /**这个 组件的高度度, 默认h-28 ,使用了tailwindcss 的utility */
  const height =
    tailwindCssHeight === undefined ? " tw-h-28" : " " + tailwindCssHeight;
  return (
    <span
      className={"tw-relative tw-overflow-y-hidden tw-flex " + width + height}
    >
      {/* 特别插入的 style标签
       因为 tailwind css 对动态生成的东西不编译 utility class
      */}
      <style>{String.raw`${insertedCss}`}</style>
      <div
        className={
          "tw-container tw-absolute tw-transition-[transform] tw-duration-100 tw-ease-in-out" +
          ` -tw-translate-y-[${translateYHeight[state]}rem]`
        }
        onWheel={(e) => {
          // 节流 throttle ? debounce? 到底是什么
          clearTimeout((scrollHanlder as unknown as any).tid);

          (scrollHanlder as unknown as any).tid = setTimeout(() => {
            scrollHanlder(e.deltaY);
          }, 800);
        }}
        onClick={(e) => {
          // 节流 throttle ? debounce? 到底是什么
          clearTimeout((scrollHanlder as unknown as any).tid);

          (scrollHanlder as unknown as any).tid = setTimeout(() => {
            if (e.ctrlKey) {
              scrollHanlder(1);
              return;
            }
            scrollHanlder(-1);
          }, 800);
        }}
      >
        {arr.map((item, idx) => {
          return (
            <div className={tailwindCssHeight} key={idx}>
              <h1
                className={tailwindCssHeight + " tw-relative "}
                title={item.split("/")[1]}
              >
                {item.split("/")[0]}
              </h1>
            </div>
          );
        })}
      </div>
    </span>
  );
}
