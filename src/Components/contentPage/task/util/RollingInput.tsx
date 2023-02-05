import React, { ReactElement } from "react";
import cs from "classnames";

import ButtonCustomized from "../../../../lib/Button/ButtonCustomized/ButtonCutomized";
interface Props {}
/**
 *a custom hook ,can make your input auto focus
 * @param inputRef  the ref of the input elment which u wanna focus on
 * @param state the state that decides whether your input is visible
 */
function useFocusInputDependOnState(
  inputRef: React.MutableRefObject<null>,
  state: any
) {
  // 注意， 即使是useLayoutEffect ，自动focus也失效.
  //用setTimeout做个更慢的延迟。。
  React.useEffect(() => {
    setTimeout(() => {
      (inputRef.current as any).focus();
    }, 100);
    (inputRef.current as any).focus();
    return () => {
      // can this clear operation work? will it cause any trouble?
      inputRef = null as unknown as React.MutableRefObject<null>;
    };
  }, [state]);
}

export default function RollingInput({}: Props): ReactElement {
  // 开合状态的state
  const [state, setstate] = React.useState(false);
  //input value的状态
  const [val, setval] = React.useState("");

  let inputRef = React.useRef(null);

  useFocusInputDependOnState(inputRef, state);

  return (
    <div className="tw-relative">
      {/* 搞笑输入框容器 */}
      <div
        className={cs("tw-absolute  tw-w-full tw-transition-all ", {
          "tw-pt-0": state === false,
          "tw-pt-4": state,
          "tw-h-0": state === false,
          "tw-duration-300": state,
        })}
      >
        <div
          //z-index 仅在有定位属性的元素上生效，所以下面的tw-relative 就是为了让tw-z-50生效
          className={cs(
            "-tw-mt-4 tw-flex tw-duration-100 tw-relative tw-z-50 ",
            {
              "tw-invisible": !state,
            }
          )}
        >
          <input
            className="tw-caret-purple-800 tw-rounded-l-md tw-outline-none tw-leading-[3.5rem] tw-text-4xl tw-pl-3 tw-align-middle tw-h-14 tw-text-black tw-w-full"
            type="text"
            value={val}
            ref={inputRef}
            onChange={(e) => {
              e.preventDefault();
              setval(e.target.value);
            }}
            autoFocus
          />

          <div className="">
            <ButtonCustomized
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setstate(!state);
              }}
              height={3.5}
              width={6}
            >
              提交
            </ButtonCustomized>
          </div>
        </div>
      </div>
      {/* 搞笑监听器容器 */}
      <div
        className="tw-h-16 tw-w-full tw-border-b-2 tw-bg-black tw-opacity-50"
        onClick={(e) => {
          e.preventDefault();
          setstate(!state);
        }}
      >
        在这里添加任务
      </div>
      {/* 搞笑模态背景容器 */}
      <ModalBackground state={state} setstate={setstate}></ModalBackground>

      {/* classnames 
     
     <div classNames={cs("常驻css 类名",{"类名x":表达式})}></div>

     当 表达式为真，"类名x会被添加到div 上"
     */}
    </div>
  );
}
/**
 * a violent overlay 
 * 
 *two params:
 state,decide whether it's show,
 setstate, change the state.
 it's a controlled component;

 attention,if u want a modal mask(which means background overlay doesn't respond to click), 
 pass in the setstate,
 if u want a non-modal one,don't pass in the setstate.
 the overlay's default zIndex is 10,make  sure your dialog or some other modal card's index is higher.
 */
export function ModalBackground({
  state,
  setstate,
  zIndex = 10,
}: {
  state: boolean;
  setstate?: React.Dispatch<React.SetStateAction<boolean>>;
  zIndex?: number;
}): ReactElement {
  return (
    <div
      onClick={() => {
        if (setstate !== undefined) {
          if (state === true) {
            setstate(!state);
          }
        } else {
          if (process.env.NODE_ENV === "development")
            console.log("seems you want a non-modal mask");
        }
      }}
      className={cs(
        "tw-fixed tw-w-screen tw-h-screen tw-bg-black tw-opacity-80 tw-top-0 tw-left-0",
        {
          "tw-invisible": !state,
        }
      )}
      style={{ zIndex: `${zIndex}` }}
    ></div>
  );
}
