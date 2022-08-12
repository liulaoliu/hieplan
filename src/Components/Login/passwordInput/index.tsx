import React, { ReactChild, ReactElement } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useField } from "formik";
import ErrorMessage from "../util/errorMessage";
export interface inputProp {
  id?: string;
  name: string;
  label?: string;
  type: string;
  placeholder: string;
  initialTouched: boolean;
  handleInitialTouched: React.Dispatch<React.SetStateAction<boolean>>;
  passwordRequirement: string;
}
/**
 * 
use it inside a form，it's just a input bar.

一条 input输入框
 */
export default function PasswordInput({
  initialTouched,
  handleInitialTouched,
  passwordRequirement,
  label,
  ...props
}: inputProp): ReactElement {
  const [field, meta] = useField(props);
  const [show, setShow] = React.useState(false);
  const ref: React.LegacyRef<HTMLInputElement> = React.useRef(null);

  /**
   * 如果是 password 输入框
   */
  const isPasswordInput = props.type === "password";
  if (!isPasswordInput) {
    return <div>你使用了错误的 Input框</div>;
  }

  return (
    <div className="tw-mb-6 ">
      <div
        className="tw-flex   
        tw-border-gray-300 
        tw-bg-white
        focus:tw-text-gray-700 
        focus:tw-bg-white 
        focus:tw-border-blue-600 
          tw-rounded
          "
      >
        <label htmlFor={props.id || props.name}>{label}</label>
        <input
          className="tw-form-control tw-block tw-w-full tw-px-4 tw-py-2 tw-text-xl tw-font-normal tw-text-gray-700  tw-bg-clip-padding
          tw-transition tw-ease-in-out tw-m-0 
          focus:tw-outline-none
          tw-rounded
          "
          {...field}
          {...props}
          type={show === true ? "text" : "password"}
          onFocus={() => {
            handleInitialTouched(true);
          }}
          ref={ref}
        />
        <div
          className="tw-cursor-pointer tw-pr-2 tw-flex tw-flex-col tw-justify-center"
          onClick={() => {
            setShow(!show);

            if (ref.current !== null) {
              ref.current.focus();
            }
          }}
        >
          {show === true ? <BiHide></BiHide> : <BiShow></BiShow>}
        </div>
      </div>
      {initialTouched === true ? (
        <div className="tw-font-bold tw-text-blue-700 dark:tw-text-slate-100 tw-pl-2 tw-h-auto tw-select-none">
          {passwordRequirement}
        </div>
      ) : (
        <div className="tw-h-auto tw-mb-2 tw-invisible tw-select-none">
          {passwordRequirement}
        </div>
      )}
      {meta.touched && meta.error ? (
        <ErrorMessage someErrorMessage="密码太弱"></ErrorMessage>
      ) : null}
    </div>
  );
}
