import React, { ReactElement } from "react";
import CheckBox from "./checkBox";
import Input from "./input";
import PasswordInput from "./passwordInput";
import { Form, useFormik, useFormikContext } from "formik";
interface Props {}
/**
 *  注册表
 */
export default function MyForm({}: Props): ReactElement {
  const config = {
    login: "/login",
  };
  const { dirty, isValid } = useFormikContext();

  return (
    <Form>
      <Input
        name="email"
        type="email"
        placeholder="邮箱地址"
        autoFocus={true}
        showErrorMessage={true}
      ></Input>
      <PasswordInput
        showErrorMessage={true}
        passwordRequirement=" 密码6~10个字符,至少包含一个大小写字母"
        name="password"
        type="password"
        placeholder="密码"
      ></PasswordInput>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
        <a
          href={config.login}
          className=" tw-duration-200 tw-transition tw-ease-in-out
           tw-text-blue-600 hover:tw-text-blue-700 focus:tw-text-blue-700 active:tw-text-blue-800
           dark:tw-text-slate-200 hover:dark:tw-text-slate-300 focus:dark:tw-text-slate-300 active:dark:tw-text-slate-100
           "
        >
          俺有账号
        </a>
      </div>

      <button
        type="submit"
        className="tw-inline-block tw-px-7 tw-py-3 tw-text-white tw-font-bold tw-text-sm tw-leading-snug tw-uppercase 
        tw-rounded tw-shadow-md   

        hover:tw-shadow-lg  
        focus:tw-shadow-lg 
        focus:tw-outline-none 
        focus:tw-ring-0  
        active:tw-shadow-lg 

        tw-transition 
        tw-duration-150 
        tw-ease-in-out 
        tw-w-full
        tw-bg-blue-600 
        hover:tw-bg-blue-700
        focus:tw-bg-blue-700
        active:tw-bg-blue-800
        dark:tw-border-2
        
        disabled:focus:tw-outline-none 
        disabled:focus:tw-ring-0 
        disabled:tw-opacity-60
        disabled:hover:tw-bg-blue-600
      disabled:focus:tw-bg-blue-600
      disabled:active:tw-bg-blue-600
        "
        disabled={isValid === false || dirty === false}
      >
        创建新账户
      </button>
    </Form>
  );
}
