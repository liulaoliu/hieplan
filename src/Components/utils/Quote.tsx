import React, { ReactElement } from "react";
import { NumberLiteralType } from "typescript";

interface Props {}

const someSayings = [
  "请假一天 么么哒/著名作家 陈政华@",
  "再请假一天 么么哒/陈公子@",
  "再请假一天 明天恢复更新/陈貂寺@",
  "苟利国家生死以 岂因祸福避趋之 /林则徐",
  "自我解压 良好心态 快乐生活 /中共大连市委宣传部 大连市文明办 宣",
  "我坐在椅子上 看日出复活/陈绮贞",
  "与其感慨路难行 不如马上出发/DOTA2英雄 克林克兹",
  "Guns,lots of guns/基努·里维斯",
  "我的名字是沙赞/电影《雷霆沙赞》 沙赞",
  "白昼行将，暗夜魔王/Dota2英雄 暗夜魔王",
];

export default function Quote({}: Props): ReactElement {
  function getRandomIdx(): number {
    const len = someSayings.length - 1;
    const idx = Math.floor(Math.random() * (len - 0 + 1) + 0);
    return idx;
  }

  const [quoteIdx, setQuote] = React.useState(getRandomIdx());

  const compound = React.useMemo(() => {
    const saying = cleanLastAtSymbol(someSayings[quoteIdx].split("/")[0]);
    const sourcE = cleanLastAtSymbol(someSayings[quoteIdx].split("/")[1]);

    return { saying, sourcE };
  }, [quoteIdx]);

  function cleanLastAtSymbol(str: string) {
    if (str.endsWith("@")) {
      const len = str.length;
      let newStr = str.slice(0, len - 1);
      return newStr;
    }
    return str;
  }
  return (
    <div
      style={{
        fontWeight: "bolder",
      }}
      onClick={() => {
        if (someSayings[quoteIdx].endsWith("@")) {
          setQuote(quoteIdx + 1);
        } else {
          setQuote(getRandomIdx());
        }
      }}
    >
      <div className="saying">{compound.saying}</div>
      <div className="sourcE">{"---" + compound.sourcE}</div>
    </div>
  );
}
