import { useNavigate } from "react-router-dom";

import funnybarHook from "./funnybarHook";

const useNavigateLoginCmd: funnybarHook = function (inputValue: string) {
  const navigate = useNavigate();

  const execTheCmd = () => {
    navigate("/login");
  };

  const possibility = ["login", "lg", "登录"];

  function judge() {
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useNavigateLoginCmd;
