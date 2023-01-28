import React, { ReactElement } from "react";
import cs from "classnames";
import Button from "../../../../lib/Button/Button";
import ButtonCustomized from "../../../../lib/Button/ButtonCustomized/ButtonCutomized";
interface Props {}

export default function RollingInput({}: Props): ReactElement {
  const [state, setstate] = React.useState(false);
  const [val, setval] = React.useState("");
  let inputRef = React.useRef(null);
  // 注意， 即使是useLayoutEffect 也有概率 自动focus 失效，没搞清楚为什么
  React.useEffect(() => {
    setTimeout(() => {
      (inputRef.current as any).focus();
    }, 100);

    return () => {
      // can this clear operation work? will it cause any trouble?
      inputRef = null as unknown as React.MutableRefObject<null>;
    };
  }, [state]);
  return (
    <div className="tw-relative">
      <div
        className={cs("tw-absolute  tw-w-4/5 tw-transition-all ", {
          "tw-pt-0": state === false,
          "tw-pt-4": state,
          "tw-h-0": state === false,
          "tw-duration-300": state,
        })}
      >
        <div
          className={cs("-tw-mt-4 tw-flex tw-duration-100", {
            "tw-invisible": !state,
          })}
        >
          <input
            className="tw-caret-purple-800
            tw-rounded-l-md
            tw-outline-none
            tw-leading-[3.5rem]
            tw-text-4xl
            tw-pl-3
            tw-align-middle
            tw-h-14
            tw-text-black tw-w-4/5 "
            type="text"
            value={val}
            ref={inputRef}
            onChange={(e) => {
              e.preventDefault();
              setval(e.target.value);
            }}
            autoFocus
          />

          <ButtonCustomized
            color="primary"
            onClick={() => {
              setstate(!state);
            }}
            height={3.5}
            width={6}
          >
            提交
          </ButtonCustomized>
        </div>
      </div>

      <div
        className="tw-h-16 tw-w-4/5 tw-bg-orange-500"
        onClick={() => {
          setstate(!state);
        }}
      >
        在这里添加任务
      </div>
    </div>
  );
}
