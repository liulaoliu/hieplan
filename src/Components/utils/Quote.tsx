import React, { ReactElement } from "react";

interface Props {}

const someSayings = [
  "苟利国家生死以 岂因祸福避趋之 /林则徐",
  "自我解压 良好心态 快乐生活 /中共大连市委宣传部 大连市文明办 宣",
  "我坐在椅子上 看日出复活/陈绮贞",
  "与其感慨路难行 不如马上出发/DOTA2英雄 克林克兹",
  "请假一天 明天恢复更新 么么哒/著名作家 陈政华",
  "Guns,lots of guns/基努·里维斯",
  "我的名字是沙赞/电影《雷霆沙赞》 沙赞",
];

export default function Quote({}: Props): ReactElement {
  const len = someSayings.length-1
  const idx = Math.floor(Math.random() * (len - 0 + 1) + 0);
  const saying = someSayings[idx].split("/")[0];
  const sourcE = someSayings[idx].split("/")[1];
  return (
    <div>
      <div className="saying">{saying}</div>
      <div className="sourcE">{sourcE}</div>
    </div>
  );
}
