import ChangeAppColorMode from "../../ChangeAppColorMode";
import funnybarHook from "./funnybarHook";

const useChangeColorModePreferOsCmd: funnybarHook = function (
  inputValue: string
) {
  const execTheCmd = () => {
    ChangeAppColorMode.preferOsColorMode();
  };

  const possibility = ["os", "跟随系统"];

  function judge() {
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useChangeColorModePreferOsCmd;
