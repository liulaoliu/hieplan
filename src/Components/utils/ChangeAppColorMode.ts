/**
 * 两种颜色模式
 */
const colorModeOption = ["light", "dark"] as const;
/**
 *  颜色模式 在 localStorage里边的 存储键名
 */
const storageKey = "color_mode";

/**
 *
 * 手动切换模式:保存 color_mode 到cache后还能获取cache里的color_mode,并对应修改app的页面颜色，
 * 根据系统模式:能根据系统颜色模式来对应修改app的页面颜色，
 *
 * this Class's static methods can help you change your app's color theme/color mode based on
 * the variable saved in the localStorage or os preference.
 */
export default class ChangeAppColorMode {
  /**
   * 我这里用了 tailwind css 的prefix ，我的前缀是 tw,你的前缀不一样，就要该这个变量
   *
   * per as my own tailwind config,
   * i use 'tw-' as the prefix before every default tailwind utility class name.
   * tweak this when your prefix is different。
   *
   */
  private static readonly darkModeClassName = "tw-dark";
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
    ChangeAppColorMode.removeMode();
    ChangeAppColorMode.setColorModeByOsConfig();
  }
  /**
   *
   *
   * change app's page color
   *
   * 切换网页的颜色模式
   * @returns void
   */
  public static changeColorMode() {
    // 获取当前 mode
    const mode = ChangeAppColorMode.getMode();
    // prefer os  mode
    if (mode === undefined) {
      let currentIsDark =
        document.documentElement.classList.contains("tw-dark");
      if (currentIsDark) {
        ChangeAppColorMode.setMode("light");
        ChangeAppColorMode.removeDarkModeClassName();
        return;
      } else {
        ChangeAppColorMode.setMode("dark");
        ChangeAppColorMode.addDarkModeClassName();
        return;
      }
    }
    //  manual mode
    if (mode === "light") {
      ChangeAppColorMode.setMode("dark");
      ChangeAppColorMode.addDarkModeClassName();
    } else {
      ChangeAppColorMode.setMode("light");
      ChangeAppColorMode.removeDarkModeClassName();
    }
  }

  /**
   * initial app's page color theme according to cache or os preference
   *
   * 根据localStorage的缓存或者是以跟随系统的形式来初始化页面的背景颜色
   * @returns void
   */
  public static initialColorMode = () => {
    // 获取当前 mode
    const mode = ChangeAppColorMode.getMode();
    // supervise possible os color mode change
    ChangeAppColorMode.removeAndAddOsColorModeChangeEventListener();
    // mode 为空 ，则跟随系统
    if (mode === undefined) {
      ChangeAppColorMode.setColorModeByOsConfig();
      return;
    }

    if (mode === "light") {
      ChangeAppColorMode.removeDarkModeClassName();
      return;
    } else {
      ChangeAppColorMode.addDarkModeClassName();
    }
  };
  // the following fns are helpers....... that mustn't be used out of the ColorModeStorage Class
  // 下方是 私有的helper 方法
  private static setColorModeByOsConfig() {
    const osIsDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    if (osIsDarkMode) {
      ChangeAppColorMode.addDarkModeClassName();
      return;
    } else {
      ChangeAppColorMode.removeDarkModeClassName();
      return;
    }
  }
  /**
   *
   * when os's color mode changes, check if app's manual color change mode is enabled,
   * if not enabled ,change app's color mode using the os's colorMode
   *
   * 当操作系统的颜色模式切换的时候(会触发一个事件，这是对应的事件处理函数)，检查一下app的手动颜色调整模式是不是开启的（有手动切换模式和跟随系统模式),
   * 如果手动颜色调整模式没开启，那就认为处于跟随系统模式，根据对应的媒体查询结果(系统颜色模式)来切换app的颜色
   */
  private static osPreferColorChangeHandler(e: MediaQueryListEvent) {
    let prefersDarkMode = e.matches;
    let mode = ChangeAppColorMode.getMode();
    if (mode === undefined) {
      if (prefersDarkMode) {
        ChangeAppColorMode.addDarkModeClassName();
      } else {
        ChangeAppColorMode.removeDarkModeClassName();
      }
    }
  }
  /**
   * when operating system's color mode change ,this fn will catch
   * the change event and attach necessary event handler
   * (and because i used addEventListener, i have to remove possible redundant handler)
   *
   * 运行下方的函数之后，当操作系统的颜色模式变化的时候会触发一个事件，这个事件会被监听到，
   * 而且相对应的处理函数:osPreferColorChangeHandler 会被添加处理这个事件的处理函数
   */
  private static removeAndAddOsColorModeChangeEventListener() {
    let media = window.matchMedia("(prefers-color-scheme:dark)");

    media.removeEventListener(
      "change",
      ChangeAppColorMode.osPreferColorChangeHandler
    );
    media.addEventListener(
      "change",
      ChangeAppColorMode.osPreferColorChangeHandler
    );
  }
  private static addDarkModeClassName(
    darkModeClassName: string = ChangeAppColorMode.darkModeClassName
  ) {
    document.documentElement.classList.add(darkModeClassName);
    return;
  }
  private static removeDarkModeClassName(
    darkModeClassName: string = ChangeAppColorMode.darkModeClassName
  ) {
    document.documentElement.classList.remove(darkModeClassName);
    return;
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
