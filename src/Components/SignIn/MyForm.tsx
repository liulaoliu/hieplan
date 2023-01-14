import React, { ReactElement } from "react";
import Input from "./input";
import PasswordInput from "./passwordInput";
import { Form, useFormikContext } from "formik";
import BlueButton from "../utils/buttons/BlueButton";
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

      <BlueButton disabled={isValid === false || dirty === false}>
        创建一个账号
      </BlueButton>
    </Form>
  );
}
