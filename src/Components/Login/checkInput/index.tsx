import React, { ReactElement } from "react";
import checkIcon from "./asset/check_icon.svg";

interface Props {
  checked: boolean;
  handleCheck: any;
}
// checked:tw-bg-blue-600 checked:tw-border-blue-600 ==> checkIcon
export default function checkInput({
  checked,
  handleCheck,
}: Props): ReactElement {
  return (
    <div
      className="tw-form-group tw-form-check"
      onClick={() => {
        handleCheck();
      }}
    >
      <input
        type="checkbox"
        className="tw-form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded-sm tw-bg-white
              focus:tw-outline-none tw-transition tw-duration-200 tw-mt-1 tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer
              "
        id="exampleCheck3"
        style={{
          backgroundImage: checked === true ? `url(${checkIcon})` : "",
        }}
      />
      <label
        className="tw-form-check-label tw-inline-block tw-text-gray-800 dark:tw-text-slate-200 hover:dark:tw-text-slate-300 focus:dark:tw-text-slate-300 active:dark:tw-text-slate-100"
        htmlFor="exampleCheck2"
      >
        记住我
      </label>
    </div>
  );
}
