/**
 *
 * @param length  数组元素长度 array length
 * @returns length 长度范围内的一个随机整数数 a random element index of the given array
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
export function getQuoteString(arr: string[]) {
  const length = arr.length;
  const saying = arr[getRandomIdx(length)].split("/")[0];
  return [saying, getRandomIdx(length) % 2 === 0] as const;
}

/** 去掉@修饰符.
 *  clear '@' symbol in the given str,比如 @start,@end,@mid,@spec.
 */
export function cleanLastAtSymbol(str: string) {
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
  if (str.includes("@spec")) {
    let newStr = str.split("@spec");
    return newStr[0];
  }
  return str;
}
/**
 * 某一条saying 中会有 @spec=xxxx 这样的东西存在...
 */
export function isSpecial(str: string) {
  return str.includes("@spec=");
}
/**
 * 把形如"白昼行将，暗夜魔王/Dota2英雄 暗夜魔王 @spec=something special"的一条saying 里面的 substring
 * 'Dota2英雄 暗夜魔王 @spec=something special'中的
 * something special 给report出来,
 * @param str
 */
export function reportSpecialComment(str: string) {
  return str.split("@spec=")[1];
}
/** 通过@修饰符判断 处于 连续的一组saying的 头部?.
 * in someSaying array(or other sentence source),sentence like 'xxxxx/xxxx@start' means
 * it's the fore part of the sentence group. so isStart can tell a str is fore part or not.
 */
export function isStart(str: string) {
  if (str.endsWith("@start")) {
    return true;
  }
  return false;
}
/** 通过@修饰符判断 处于 连续的一组saying的 尾部?
 *
 * isEnd can tell a  str is an ending sentence or not
 */
export function isEnd(str: string) {
  if (str.endsWith("@end")) {
    return true;
  }
  return false;
}
/** 通过@修饰符判断 处于 连续的一组saying的 中间?
 *
 * isMid can tell whether a str is the middle part or not.
 */
export function isMid(str: string) {
  if (str.endsWith("@mid")) {
    return true;
  }
  return false;
}
