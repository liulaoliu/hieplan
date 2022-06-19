import React, { ReactElement } from "react";

interface Props {
  returnString?: boolean;
}
/**
 * "@修饰符" 加入方法 看下面数组的示例
 * "someSayings中的 '@修饰符' 的作用是标记一句话属于连续一组话的开头/中间/结尾，没有其他作用
 * 连续一组话 指的是:
Never mind, I'll find someone like you @start
I wish nothing but the best for you, too @mid
"Don't forget me, " I begged @mid
I remember you said @mid
"Sometimes it lasts in love, but sometimes it hurts instead" @end
 *  "
 */
const someSayings = [
  "请假一天 么么哒/著名作家 陈政华@start",
  "再请假一天 么么哒/陈公子@mid",
  "再请假一天 明天恢复更新/陈貂寺@end",
  "苟利国家生死以 岂因祸福避趋之 /林则徐",
  "自我解压 良好心态 快乐生活 /中共大连市委宣传部 大连市文明办 宣",
  "我坐在椅子上 看日出复活/陈绮贞",
  "与其感慨路难行 不如马上出发/DOTA2英雄 克林克兹",
  "Guns,lots of guns/基努·里维斯",
  "我的名字是沙赞/电影《雷霆沙赞》 沙赞",
  "白昼行将，暗夜魔王/Dota2英雄 暗夜魔王",
  "Never mind, I'll find someone like you/阿黛尔:SomeOne Like You @start",
  "I wish nothing but the best for you, too/阿黛尔:SomeOne Like You@mid",
  `"Don't forget me, " I begged/阿黛尔:SomeOne Like You@mid`,
  "I remember you said/阿黛尔:SomeOne Like You@mid",
  `"Sometimes it lasts in love, but sometimes it hurts instead"/阿黛尔:SomeOne Like You@end`,
];
/**
 *
 *
 * @returns
 * 渲染一句有深意 或者是 幽默的 话。
 *
 *
 */

/**
 *
 * @param length  数组元素长度
 * @returns length 长度范围内的一个随机整数数
 */
export function getRandomIdx(length: number): number {
  const len = length - 1;
  const idx = Math.floor(Math.random() * (len - 0 + 1) + 0);
  return idx;
}
/**
 * return the rest idx of the given arr circularly based on an given arr and an given index.
 * love from ArrayDeque :D
 * @param arr a given arr
 * @param anGivenIdx an idx comes from the given arr
 */
export function getRestIdxCircular(arr: any[], anGivenIdx: number) {
  const result = [];
  while (result.length < arr.length - 2) {
    anGivenIdx += 1;
    result.push(anGivenIdx % arr.length);
  }
  return result;
}
/**
 * return the next idx of the given arr circularly based on an given arr and an given index.
 * love from ArrayDeque :D
 * @param arr a given arr
 * @param anGivenIdx an idx comes from the given arr
 * @returns
 */
export function getNextIdxCircularly(arr: any[], anGivenIdx: number) {
  return (anGivenIdx + 1) % arr.length;
}

/**
 * return the previous idx of the given arr circularly based on an given arr and an given index.
 * love from ArrayDeque :D
 * @param arr a given arr
 * @param anGivenIdx an idx comes from the given arr
 * @returns
 */
export function getPreviousIdxCircularly(arr: any[], anGivenIdx: number) {
  return (anGivenIdx - 1 + arr.length) % arr.length;
}
/**
 *
 * @param arr an arr
 * @returns [a random item,whether the random item's idx is even ]
 */
export function getQuoteString() {
  const length = someSayings.length;
  const saying = someSayings[getRandomIdx(length)].split("/")[0];
  return [saying, getRandomIdx(length) % 2 === 0] as const;
}

export default function Quote({ returnString }: Props): ReactElement {
  /** 为了 能连续地显示 someSayings 中 @start,@mid直到@end 而维护的状态*/
  const [active, setactive] = React.useState(false);

  /**  就是 getRandomIdx的结果*/
  const [quoteIdx, setQuote] = React.useState(getRandomIdx(someSayings.length));

  /** 把随机的一条saying 给清理一下 (去掉/)和多余的@修饰符*/
  const compound = React.useMemo(() => {
    const saying = someSayings[quoteIdx].split("/")[0];
    const sourcE = cleanLastAtSymbol(someSayings[quoteIdx].split("/")[1]);

    return { saying, sourcE };
  }, [quoteIdx]);

  /** 去掉@修饰符*/
  function cleanLastAtSymbol(str: string) {
    if (str.endsWith("@mid") || str.endsWith("@end")) {
      const len = str.length;
      let newStr = str.slice(0, len - 4);
      return newStr;
    }
    if (str.endsWith("@start")) {
      const len = str.length;
      let newStr = str.slice(0, len - 6);
      return newStr;
    }
    return str;
  }

  /** 通过@修饰符判断 处于 连续的一组saying的 头部?*/
  function isStart(str: string) {
    if (str.endsWith("@start")) {
      return true;
    }
    return false;
  }
  /** 通过@修饰符判断 处于 连续的一组saying的 尾部?*/
  function isEnd(str: string) {
    if (str.endsWith("@end")) {
      return true;
    }
    return false;
  }
  /** 通过@修饰符判断 处于 连续的一组saying的 中间?*/
  function isMid(str: string) {
    if (str.endsWith("@mid")) {
      return true;
    }
    return false;
  }

  return (
    <div
      className="select-none cursor-pointer font-bold  min-w-min whitespace-nowrap"
      onClick={() => {
        if (isStart(someSayings[quoteIdx])) {
          // 激活
          setactive(true);
          setQuote(quoteIdx + 1);
        } else if (isEnd(someSayings[quoteIdx])) {
          // 停用
          setactive(false);
          setQuote(getRandomIdx(someSayings.length));
        } else if (isMid(someSayings[quoteIdx])) {
          if (active) {
            //激活则保持 ，停用则随机
            setQuote(quoteIdx + 1);
          } else {
            setQuote(getRandomIdx(someSayings.length));
          }
        } else {
          setQuote(getRandomIdx(someSayings.length));
        }
      }}
    >
      <div className="saying">{compound.saying}</div>
      <div className="sourcE">{"---" + compound.sourcE}</div>
    </div>
  );
}

interface Props {}
interface State {}
