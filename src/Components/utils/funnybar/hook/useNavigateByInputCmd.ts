import { useNavigate } from "react-router-dom";

import funnybarHook from "./funnybarHook";

const CANGOEVERYWHERE =
  "CANGOEVERYWHERE,this tells you a 'can go every where' navigateHook in funnybar is used";
/**
 * 
  if input's pattern is "/main/test or "main test ",
  this hook can navigate the page to the specified url
  "
 */
const useNavigateByInputCmd: funnybarHook = function (inputValue: string) {
  const navigate = useNavigate();
  const re = /\s{1,}/;
  const isAddrContainsSpace = re.test(inputValue);
  const clearSpaceAddr = inputValue.split(" ").join("/");
  const execTheCmd = () => {
    if (isAddrContainsSpace) {
      navigate(clearSpaceAddr);
      return;
    }
    navigate(inputValue);
  };

  const possibility = [CANGOEVERYWHERE];

  function judge() {
    if (inputValue.includes("/") || isAddrContainsSpace) {
      return true;
    }
    //包含空格，且以字母开头

    return false;
  }
  return { judge, execTheCmd, possibility };
};

export default useNavigateByInputCmd;
