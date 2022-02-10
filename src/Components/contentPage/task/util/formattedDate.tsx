/**
 * 一个特殊的 用与在Task页面显示日期字符串的类
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
   * 接受一个 日期 字符串，把字符串的日 项目向过去的方向 调整一天
   * 比如 传入2022-2-9 输出 2022-2-8
   */
  static dayMinus(date: string): string {
    //   包装ISO日期字符串,把日期向回拨动
    let d = new Date(date + "Z");
    d.setDate(d.getDate() - 1);
    return FormattedDate.getFormatedDateHelper(d);
  }
  /**
   * static helper
   * 接受一个 日期 字符串，把字符串的日 项目向未来的方向 调整一天
   * 比如 传入2022-2-9 输出 2022-2-10
   */
  static dayPlus(date: string): string {
    //   包装ISO日期字符串,把日期向回拨动
    let d = new Date(date + "Z");
    d.setDate(d.getDate() + 1);
    return FormattedDate.getFormatedDateHelper(d);
  }
}
