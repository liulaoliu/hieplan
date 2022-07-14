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
export default class ColorModeStorage {
  /**
   *
   * @returns  获取local storage(缓存)里的颜色模式，如果缓存里没有颜色模式，返回undefined,说明在使用跟随系统
   */
  public static getMode() {
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
   * @param mode 设置缓存里的颜色模式
   */
  public static setMode(mode: "light" | "dark") {
    localStorage.setItem(storageKey, mode);
  }
  /**
   * 清除缓存里的颜色模式
   */
  public static removeMode() {
    localStorage.removeItem(storageKey);
  }
  /**
   * when prefer os is selected,use this fn
   */
  public static preferOsColorMode() {
    ColorModeStorage.removeMode();
    ColorModeStorage.setColorModeByOsConfig();
  }
  /**
   * 切换网页的颜色模式
   * @returns void
   */
  public static changeColorMode() {
    // 获取当前 mode
    const mode = ColorModeStorage.getMode();
    // prefer os  mode
    if (mode === undefined) {
      let currentIsDark =
        document.documentElement.classList.contains("tw-dark");
      if (currentIsDark) {
        ColorModeStorage.setMode("light");
        document.documentElement.classList.remove("tw-dark");
        return;
      } else {
        ColorModeStorage.setMode("dark");
        document.documentElement.classList.add("tw-dark");
        return;
      }
    }
    //  manual mode
    if (mode === "light") {
      ColorModeStorage.setMode("dark");
      document.documentElement.classList.add("tw-dark");
    } else {
      ColorModeStorage.setMode("light");
      document.documentElement.classList.remove("tw-dark");
    }
  }

  /**
   * 根据localStorage的缓存或者是以跟随系统的形式来初始化页面的背景颜色
   * @returns void
   */
  public static initialColorMode = () => {
    // 获取当前 mode
    const mode = ColorModeStorage.getMode();
    // supervise possible os color mode change
    ColorModeStorage.removeAndAddOsColorModeChangeEventListener();
    // mode 为空 ，则跟随系统
    if (mode === undefined) {
      ColorModeStorage.setColorModeByOsConfig();
      return;
    }

    if (mode === "light") {
      document.documentElement.classList.remove("tw-dark");
      return;
    } else {
      document.documentElement.classList.add("tw-dark");
    }
  };
  // the following fns are helpers....... that mustn't be used out of the ColorModeStorage Class
  private static setColorModeByOsConfig() {
    const osIsDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    if (osIsDarkMode) {
      document.documentElement.classList.add("tw-dark");
      return;
    } else {
      document.documentElement.classList.remove("tw-dark");
      return;
    }
  }
  /**
   *
   * when os's color mode changes, check if app's manual color change mode is enabled,
   * if not enabled ,change app's color mode using the os's colorMode
   */
  private static osPreferColorChangeHandler(e: MediaQueryListEvent) {
    let prefersDarkMode = e.matches;
    let mode = ColorModeStorage.getMode();
    if (mode === undefined) {
      if (prefersDarkMode) {
        document.documentElement.classList.add("tw-dark");
      } else {
        document.documentElement.classList.remove("tw-dark");
      }
    }
  }
  /**
   * when operating system's color mode change ,this fn will catch
   * the change event and attach necessary event handler
   * (and because i used addEventListener, i have to remove possible redundant handler)
   */
  private static removeAndAddOsColorModeChangeEventListener() {
    let media = window.matchMedia("(prefers-color-scheme:dark)");

    media.removeEventListener(
      "change",
      ColorModeStorage.osPreferColorChangeHandler
    );
    media.addEventListener(
      "change",
      ColorModeStorage.osPreferColorChangeHandler
    );
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
