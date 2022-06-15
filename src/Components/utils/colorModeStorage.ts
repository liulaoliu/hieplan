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
 */
export default class colorModeStorage {
  /**
   *
   * @returns  获取 storage里的颜色模式
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
   * @param mode 设置storage里的颜色模式
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
}

// example;
// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
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
