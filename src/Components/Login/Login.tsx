import React, { ReactElement, useState } from "react";
import loginSvg from "./asset/svg/login.svg";
import CheckBox from "./checkBox";
import Input from "./input";
import { usePopperTooltip } from "react-popper-tooltip";
import { Formik, Form } from "formik";
/**
 * 这是登录或者注册页面
 */
export default function Login({ mode }: { mode: string }): ReactElement {
  const config = {
    forgotPassword: "/registry/forgotpassword",
  };

  const [rememberMe, setRememberMe] = useState(false);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="tw-h-screen color-change-base ">
        <div className="tw-container tw-px-6 tw-py-12 tw-h-full">
          <div className="tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-h-full tw-g-6 tw-text-gray-800">
            <div className="md:tw-w-8/12 lg:tw-w-6/12 tw-mb-12 md:tw-mb-0">
              <img src={loginSvg} className="tw-w-full" alt="Phone image" />
            </div>
            <div className="md:tw-w-8/12 lg:tw-w-5/12 lg:tw-ml-20">
              <Form>
                <Input name="email" type="text" placeholder="邮箱地址"></Input>
                <Input
                  name="password"
                  type="password"
                  placeholder="密码"
                ></Input>

                <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                  <CheckBox
                    // text="记住我"
                    // checked={rememberMe}
                    // handleCheck={() => {
                    //   setRememberMe(!rememberMe);
                    // }}
                    name="rememberMe"
                    type="checkbox"
                    text="记住我"
                  ></CheckBox>
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
                  登录/创建新账户
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
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}
