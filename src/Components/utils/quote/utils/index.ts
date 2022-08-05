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
  export function getQuoteString(arr:string[]) {
    const length = arr.length;
    const saying = arr[getRandomIdx(length)].split("/")[0];
    return [saying, getRandomIdx(length) % 2 === 0] as const;
  }
  