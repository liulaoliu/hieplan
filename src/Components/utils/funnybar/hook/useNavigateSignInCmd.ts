import { useNavigate } from "react-router-dom";

import funnybarHook from "./funnybarHook";

const useNavigateSignInCmd: funnybarHook = function (inputValue: string) {
  const navigate = useNavigate();

  const execTheCmd = () => {
    navigate("/signIn");
  };

  const possibility = ["signin", "reg", "注册"];

  function judge() {
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useNavigateSignInCmd;