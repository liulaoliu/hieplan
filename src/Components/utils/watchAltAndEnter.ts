/**
 *  在document 上添加一个全局的 event listener 来监视 alt+ enter，
 *  handler 是 一个外部state的 控制器，
 * @param prevState 调用watchAltAndEnter 之前的 state，
 * @param handler 当alt+enter被按下 调用handler，
 */
export default function watchAltAndEnter(
  prevState: boolean,
  handler: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (document) {
    // onkeydown 只 加一次 ，默认覆盖
    document.onkeydown = function (e: KeyboardEvent) {
      if (e.code === "Enter" && e.altKey) {

        handler(!prevState);
      }
    };

    // 下面的“使用 addEventListener”的 示范会导致可怕的性能问题
    // document.addEventListener("keydown",function (e: KeyboardEvent) {
    //     if (e.code === "Enter" && e.altKey) {
    //       handler(!prevState);
    //     }
    //   })
  }
}
