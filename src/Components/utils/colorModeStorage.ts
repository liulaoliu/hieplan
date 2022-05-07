/**
 * 保存和获取 color mode
 */
export default class colorModeStorage {
  static getMode() {
    const mode = localStorage.getItem("color_mode");
    if (mode === null) {
      return undefined;
    }
    return mode;
  }

  static setMode(mode: "light" | "dark") {
    localStorage.setItem("color_mode", mode);
  }
  static diffMode(mode: "light" | "dark") {
    const newMode = mode === "dark" ? "light" : "dark";
    return newMode;
  }
}
