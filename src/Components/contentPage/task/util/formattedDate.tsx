/**
 * patterns 对象 模拟enum
 */
export const patterns = {
  day: "day" as const,
  week: "week" as const,
  month: "month" as const,
};
/**
 * 日期显示的三种格式 ,只能是全显示/显示年月/显示年
 * 是 patterns 的派生类型
 */
export type pattern = keyof typeof patterns;
/**
 * 一个特殊的 用与在Task页面显示日期字符串的 类
 *
 */
export default class FormattedDate {
  private readonly year: number;
  private readonly month: number;
  private readonly day: number;
  constructor() {
    //  初始化一个date实例
    const d = new Date();
    //  用解构赋值的方式快速获取 年月日 ,注意月 的 bizarre behavior
    [this.year, this.month, this.day] = [
      d.getFullYear(),
      d.getMonth() + 1,
      d.getDate(),
    ];
  }
  /**
   * 获取格式化完毕的当天日期 形式为 : "年_月_日" 比如:"2022_2_9"
   */
  public getTodayDate() {
    /**
     * 这是 ISO 格式  也就是 YYYY-MM-DD
     * 这个很方便的就能通过Date 转换为 date实例
     */
    return `${this.year}-${this.month}-${this.day}`;
  }
  /**
   * 接受一个Date实例, 返回格式化的年月日
   * 形如YYYY-MM-DD
   */
  private static getFormatedDateHelper(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向过去的方向 调整1/7/30天
   * 比如 传入2022-2-9 输出 2022-2-8
   */
  static dayMinus(date: string, n?: 1 | 7 | 30): string {
    if (n === undefined) {
      n = 1;
    }
    //   包装ISO日期字符串,把日期向回拨动
    let d = new Date(date + "Z");
    d.setDate(d.getDate() - n);
    return FormattedDate.getFormatedDateHelper(d);
  }
  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向未来的方向 调整1/7/30天
   * 比如 传入2022-2-9 输出 2022-2-10
   */
  static dayPlus(date: string, n?: 1 | 7 | 30): string {
    if (n === undefined) {
      n = 1;
    }
    //   包装ISO日期字符串,把日期向回拨动
    let d = new Date(date + "Z");
    d.setDate(d.getDate() + n);
    return FormattedDate.getFormatedDateHelper(d);
  }

  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向过去的方向 调整7天
   * 比如 传入2022-2-9 输出 2022-2-2
   */
  static weekMinus(date: string): string {
    return FormattedDate.dayMinus(date, 7);
  }
  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向未来的方向 调整7天
   * 比如 传入2022-2-9 输出 2022-2-16
   */
  static weekPlus(date: string): string {
    return FormattedDate.dayPlus(date, 7);
  }

  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向过去的方向 调整30天
   * 比如 传入2022-2-9 输出 2022-1-9 （大概）
   */
  static monthMinus(date: string): string {
    return FormattedDate.dayMinus(date, 30);
  }
  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向未来的方向 调整30天
   * 比如 传入2022-2-9 输出 2022-1-9 （大概）
   */
  static monthPlus(date: string): string {
    return FormattedDate.dayPlus(date, 30);
  }
  /**
   * 接受一个模式字符串，接受一个date字符串 (形如YYYY-MM-DD)
   * 判断模式为 日/周/月 ，返回向过去方向 一天/一周/一月的 那一天
   *
   * 那一天，杨坤遇见了你
   */
  static getPreviousDateByPattern(pattern: pattern,date:string):string {
    /**
     * 设置一个错误的 初始化值
     */
    let newDate="错误的 初始化值"
    /**
     * 判断的pattern内容是 本组件维护的state pattern中的内容
     */
    
    switch (pattern) {
      case patterns.day:
        newDate = FormattedDate.dayMinus(date);
        break;
      case patterns.week:
        newDate = FormattedDate.weekMinus(date);
        break;
      case patterns.month:
        newDate = FormattedDate.monthMinus(date);
        break;
      default:
        break;
    }
    return newDate;
  }
  /**
   * 接受一个模式字符串，接受一个date字符串 (形如YYYY-MM-DD)
   * 判断模式为 日/周/月 ，返回向未来方向 一天/一周/一月的 那一天
   *
   * 
   */
   static getFutureDateByPattern(pattern: pattern,date:string):string {
    /**
     * 设置一个错误的 初始化值
     */
    let newDate="错误的 初始化值"
    /**
     * 判断的pattern内容是 本组件维护的state pattern中的内容
     */
    
    switch (pattern) {
      case patterns.day:
        newDate = FormattedDate.dayPlus(date);
        break;
      case patterns.week:
        newDate = FormattedDate.weekPlus(date);
        break;
      case patterns.month:
        newDate = FormattedDate.monthPlus(date);
        break;
      default:
        break;
    }
    return newDate;
  }
}
