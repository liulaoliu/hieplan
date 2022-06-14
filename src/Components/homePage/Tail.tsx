import React, { ReactElement } from "react";
import Quote from "../utils/Quote";

interface Props {}
/**
 *
 * @param 一条字符串 或者 不接受参数
 *
 *
 * @returns
 * 渲染接受到的字符串
 * 或者随机渲染一条默认存储的字符串
 */
export default function Tail({}: Props): ReactElement {
  return (
    <div>
      
      <Quote></Quote>
    </div>
  );
}
