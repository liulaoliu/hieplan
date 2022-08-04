import ChangeAppColorMode from "../../ChangeAppColorMode";
import funnybarHook from "./funnybarHook";

const useChangeColorModeCmd: funnybarHook = function (inputValue: string) {
  const execTheCmd = () => {
    ChangeAppColorMode.changeColorMode();
  };

  const possibility = ["c", "color", "change"];

  function judge() {
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useChangeColorModeCmd;
