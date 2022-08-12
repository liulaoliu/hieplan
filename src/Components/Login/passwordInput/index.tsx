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
  // initialTouched: boolean;
  // handleInitialTouched: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * specify what constituent does the password must have.
   */
  passwordRequirement: string;
}
/**
 * 
use it inside a form，it's just a input bar.

一条 input输入框 但是仅仅用于密码输入
 */
export default function PasswordInput({
  passwordRequirement,
  label,
  ...props
}: inputProp): ReactElement {
  const [field, meta] = useField(props);
  const [show, setShow] = React.useState(false);
  const ref: React.LegacyRef<HTMLInputElement> = React.useRef(null);
  const [passwordInputInitialTouched, setPasswordInputInitialTouched] =
    React.useState(false);

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
            setPasswordInputInitialTouched(true);
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
      {passwordInputInitialTouched === true ? (
        <div className="tw-font-bold tw-text-blue-700 dark:tw-text-slate-100 tw-pl-2 tw-h-auto tw-select-none">
          {passwordRequirement}
        </div>
      ) : (
        <div className="tw-h-auto tw-mb-2 tw-invisible tw-select-none">
          {passwordRequirement}
        </div>
      )}
      {meta.touched && meta.value !== meta.initialValue && meta.error ? (
        <ErrorMessage
          someErrorMessage={tellCurrentError(meta.value)}
          // meta={meta}
        ></ErrorMessage>
      ) : null}
    </div>
  );
}
/** doesn't contain at least 1 number*/
function noNumber(str: string) {
  let re = /[0-9]/g;
  const result = !re.test(str);
  const errorMessage = "必须至少含有一个数字";
  return { result, errorMessage };
}

/** doesn't contain at least 1 upper case word*/

function noUpperCase(str: string) {
  let re = /[A-Z]/g;
  const result = !re.test(str);
  const errorMessage = "必须至少含有一个大写字母";
  return { result, errorMessage };
}

/** doesn't contain at least 1 lower case word*/
function noLowerCase(str: string) {
  let re = /[a-z]/g;
  const result = !re.test(str);
  const errorMessage = "必须至少含有一个小写字母";
  return { result, errorMessage };
}
/**
 * 有数字、字母、下划线以外的东西
 * @param str
 * @returns
 */
function hasSpecialWord(str: string) {
  let re = /\W/g;
  const result = re.test(str);
  const errorMessage = "不能有特殊字符";
  return { result, errorMessage };
}

const noMoreThan6Words = (function noMoreThanALength(length: number) {
  return function (str: string) {
    let result = false;
    const errorMessage = `必须超过${length}个字符`;

    if (str.length < length) {
      result = true;
    }

    return { result, errorMessage };
  };
})(6);

const moreThan10Words = (function noMoreThanALength(length: number) {
  return function (str: string) {
    let result = false;
    const errorMessage = `必须小于${length}个字符`;

    if (str.length > length) {
      result = true;
    }

    return { result, errorMessage };
  };
})(10);

function tellCurrentError(str: string) {
  const judgeFns = [
    noLowerCase,
    noUpperCase,
    noNumber,
    hasSpecialWord,
    noMoreThan6Words,
    moreThan10Words,
  ];
  const errorMessageArr = [];

  for (let i = 0; i < judgeFns.length; i++) {
    if (judgeFns[i](str).result === true) {
      console.log(judgeFns[i](str));

      errorMessageArr.push(judgeFns[i](str).errorMessage);
    }
  }
  console.log(errorMessageArr);

  return errorMessageArr.join(",");
}
