import { useNavigate } from "react-router-dom";

import funnybarHook from "./funnybarHook";

const useNavigateMainCmd: funnybarHook = function (inputValue: string) {
  const navigate = useNavigate();

  const execTheCmd = () => {
    navigate("/main");
  };

  const possibility = ["main", "task"];

  function judge() {
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useNavigateMainCmd;
