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

  export default someSayings