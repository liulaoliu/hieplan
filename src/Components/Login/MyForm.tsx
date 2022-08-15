import React, { ReactElement } from "react";
import CheckBox from "../SignIn/checkBox";
import Input from "../SignIn/input";
import PasswordInput from "../SignIn/passwordInput";
import { Form } from "formik";
import { usePopperTooltip } from "react-popper-tooltip";
interface Props {}
/**
 *  登录页面 表单
 */
export default function MyForm({}: Props): ReactElement {
  const config = {
    signIn: "/signIn",
    forgotPassword: "/forgotPassword",
  };
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <Form>
      <Input
        name="email"
        type="email"
        placeholder="邮箱地址"
        autoFocus={true}
        showErrorMessage={false}
      ></Input>
      <PasswordInput
        showErrorMessage={false}
        name="password"
        type="password"
        placeholder="密码"
      ></PasswordInput>

      <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
        <CheckBox name="rememberMe" type="checkbox" text="记住我"></CheckBox>
        <div className="tw-flex">
          <a
            href={config.signIn}
            className=" tw-duration-200 tw-transition tw-ease-in-out
           tw-text-blue-600 hover:tw-text-blue-700 focus:tw-text-blue-700 active:tw-text-blue-800
           dark:tw-text-slate-200 hover:dark:tw-text-slate-300 focus:dark:tw-text-slate-300 active:dark:tw-text-slate-100
           tw-mr-4
          
           "
            title="其实我也想去创建一个账号"
          >
            么的账号
          </a>
          <a
            href={config.forgotPassword}
            className=" tw-duration-200 tw-transition tw-ease-in-out
           tw-text-blue-600 hover:tw-text-blue-700 focus:tw-text-blue-700 active:tw-text-blue-800
           dark:tw-text-slate-200 hover:dark:tw-text-slate-300 focus:dark:tw-text-slate-300 active:dark:tw-text-slate-100
           "
          >
            忘记密码
          </a>
        </div>
      </div>

      <button
        ref={setTriggerRef}
        type="submit"
        className="tw-inline-block tw-px-7 tw-py-3 tw-text-white tw-font-bold tw-text-sm tw-leading-snug tw-uppercase tw-rounded tw-shadow-md   hover:tw-shadow-lg  focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0  active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-w-full
        tw-bg-blue-600 
        hover:tw-bg-blue-700
        focus:tw-bg-blue-700
        active:tw-bg-blue-800
        dark:tw-border-2
        "
      >
        登录
      </button>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          没有注册过的邮箱会直接创建一个新账户
        </div>
      )}
    </Form>
  );
}
