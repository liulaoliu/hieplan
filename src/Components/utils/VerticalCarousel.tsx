import React, { ReactElement } from "react";
import { getNextIdxCircularly, getPreviousIdxCircularly } from "./Quote";
interface Props {
  arr: any[];
}

export default function VerticalCarousel({ arr }: Props) {
  /**
   * 这个状态控制 要滚动的高度
   * this **state** controls the scroll height of this component
   */
  const [state, setstate] = React.useState(0);
  const totalItem = arr.length;

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
      str += String.raw`.-translate-y-\[${item}rem\] {
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
    7
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
   * @param direction a number,positive means upward scroll ,negative means downward scroll
   */
  function scrollHanlder(direction: number) {
    if (direction > 0) {
      console.log("pre", getPreviousIdxCircularly(arr, state));

      setstate(getPreviousIdxCircularly(arr, state));
    } else {
      console.log("next");

      setstate(getNextIdxCircularly(arr, state));
    }
  }

  return (
    <span className="relative  bg-slate-600 h-28 w-80  overflow-y-hidden ">
      {/* 特别插入的 style标签 */}
      <style>{String.raw`${insertedCss}`}</style>
      <div
        className={
          "container absolute  duration-500 ease" +
          ` -translate-y-[${translateYHeight[state]}rem]`
        }
        onWheel={(e) => {
          clearTimeout((scrollHanlder as unknown as any).tid);
          (scrollHanlder as unknown as any).tid = setTimeout(() => {
            scrollHanlder(e.deltaY);
          }, 800);
        }}
      >
        {arr.map((item, idx) => {
          return (
            <div className="h-28" key={idx}>
              <h1 className="bg-black text-white h-28">{item}</h1>
            </div>
          );
        })}
      </div>
    </span>
  );
}
