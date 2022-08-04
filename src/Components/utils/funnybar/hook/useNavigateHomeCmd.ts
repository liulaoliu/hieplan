import { useNavigate } from "react-router-dom";

import funnybarHook from "./funnybarHook";

const useNavigateHomeCmd: funnybarHook = function (inputValue: string) {
  // the "outer function" which gonna do real executing some command job should be specified here.
  // 声明要使用的"外部函数",这个外部函数 就是要执行某项命令实际要调用的函数
  const navigate = useNavigate();
  /**
   you must( i mean ,using my pattern) use this formation,which constitutes 3 steps
   1. write a function, whatever its type ,but i think an arrow fn is enough
   2. execute the outer fn inside the arrow fn. remember to couple the actual thing you want to do here,say you wanna 
   navigate your page to '/home', then fix the execTheCmd's arrow fn stuff 'navigate('/home')'
 * 3. give the arrow fn a fixed name , which is execTheCmd.

   如何暴露"外部函数"?我的思路是分三个步骤
   1. 写一个箭头函数
   2. 在箭头函数内部执行外部函数，注意，把具体要做的内容放进来，比如你要去/home,就写 navigate('/home')
   3. 给箭头函数一个名字，注意，必须是 execTheCmd
 */
  const execTheCmd = () => {
    navigate("/");
  };
  /**
   * optional at the time
   *
   */
  const possibility = ["home", "h"];

  /**
   *
   * this fn must have a name 'judge'
   * 和前面的execTheCmd 类似， 这个函数名字 必须是 judge
   */
  function judge() {
    // inputValue === "home" || inputValue === "h"
    if (possibility.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  }
  return { judge, execTheCmd, possibility };
};

export default useNavigateHomeCmd;
