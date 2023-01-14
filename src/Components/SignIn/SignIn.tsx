import React, { ReactElement } from "react";
import loginSvg from "./asset/svg/login.svg";
import { Formik } from "formik";
import formValues, { formSchema } from "./config";
import MyForm from "./MyForm";
/**
 * 这是注册页面
 */
export default function SignIn({ mode }: { mode: string }): ReactElement {
  return (
    <Formik
      initialValues={formValues}
      validationSchema={formSchema}
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
            <div className="md:tw-w-8/12 lg:tw-w-5/12 lg:tw-ml-20 tw-flex tw-flex-col tw-items-center ">
              <h1 className="tw-text-4xl tw-mb-3 tw-text-blue-700 dark:tw-text-white">
                新用户在这里注册账号
              </h1>
              <div className="tw-w-full">
                <MyForm></MyForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}
