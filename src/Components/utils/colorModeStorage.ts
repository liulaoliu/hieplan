/**
 * 两种颜色模式
 */
const colorModeOption = ["light", "dark"] as const;
/**
 *  颜色模式 在 localStorage里边的 存储键名
 */
const storageKey = "color_mode";

/**
 * 保存和获取 color_mode
 * 在 localStorage里边 使用 "storageKey" 来存储colorModeOption中的两种状态
 * If you’ve set a prefix in your Tailwind config,
 * be sure to add that to the dark class.
 * For example, if you have a prefix of tw-,
 * you’ll need to use the tw-dark class to enable dark mode.
 */
export default class colorModeStorage {
  /**
   *
   * @returns  获取local storage里的颜色模式
   */
  static getMode() {
    const mode = localStorage.getItem(storageKey) as
      | typeof colorModeOption[number]
      | null;
    // 判空
    if (mode === null) {
      return undefined;
    }
    // 判符合要求
    if (colorModeOption.includes(mode)) {
      return mode;
    }
    // 对异常状态，返回undefined
    return undefined;
  }

  /**
   *
   * @param mode 设置local storage里的颜色模式
   */
  static setMode(mode: "light" | "dark") {
    localStorage.setItem(storageKey, mode);
  }
  /**
   *
   * @param mode 颜色模式
   * @returns 返回(和当前的颜色模式)不同的颜色模式
   */
  static diffMode(mode: "light" | "dark") {
    const newMode = mode === "dark" ? "light" : "dark";
    return newMode;
  }
  /**
   * 切换网页的颜色模式
   * @returns void
   */
  static changeColorMode() {
    // 获取当前 mode
    const mode = colorModeStorage.getMode();
    if (mode === undefined) {
      // 默认是浅色模式 ，因为这里使用了tailwind 的class模式，默认Html标签没有dark 类名
      //  那么如果 localStorage里没有这个key，说明还没设置过darkmode.
      // 那么把localStorage的 color_mode设置为dark 同时把dark 加到html里，
      // **变了**颜色还进行了localStorage设置。齐活。
      colorModeStorage.setMode("dark");
      document.documentElement.classList.add("tw-dark");
      return;
    }

    if (mode === "light") {
      colorModeStorage.setMode("dark");
      document.documentElement.classList.add("tw-dark");
    } else {
      colorModeStorage.setMode("light");
      document.documentElement.classList.remove("tw-dark");
    }
  }
  /**
   * 根据localStorage的缓存来初始化页面的背景颜色
   * @returns void
   */
  public static initialColorMode() {
    // 获取当前 mode
    const mode = colorModeStorage.getMode();
    if (mode === undefined) {
      // 默认是浅色模式 ，因为这里使用了tailwind 的class模式，默认Html标签没有dark 类名
      //   设置默认localStorage 存储内容
      colorModeStorage.setMode("light");
      return;
    }

    if (mode === "light") {
      // 如果localStorage 缓存就是浅色系，那什么也不做
    } else {
      // 如果localStorage 缓存就是深色系，那把页面设置为黑的

      colorModeStorage.setMode("dark");
      document.documentElement.classList.add("tw-dark");
    }
  }
}

// example;
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
