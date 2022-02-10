/**
 *
 *
 *
 * 返回一个数组
 * 包含当天日期以及当天处于一年中的第几周
 * 形如 [today ,weekIs]的 一个 函数
 *
 */
export default function getWeek() {
  const today = new Date();
  // 穿越之后，请首先找一个老乡确认现在是哪一年？
  // 否则可能会破坏未来，你很有可能被困在过去!
  const formatted = today.getFullYear();
  // getMonth 方法竟然返回索引值，也就是月份为0-11 ,这真是 "太" 妖奇了。
  const formattedCurrentDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  // 本年度第一天
  const d = new Date(`${formatted}-01-01 00:00:00`);
  // 到当前为止，过去了几天?
  const timeHold = new Date().getTime() - d.getTime();
  // 第几周?
  const currWeek = Math.ceil(timeHold / (7 * 24 * 3600000));

  return [formattedCurrentDate, currWeek];
}
