import React, { ReactElement } from "react";

import { useField } from "formik";
export interface inputProp {
  id?: string;
  name: string;
  label?: string;
  type: string;
  placeholder: string;
}
/**
 * 
use it inside a form，it's just a input bar.

一条 input输入框
 */
export default function Input({ label, ...props }: inputProp): ReactElement {
  const [field, meta] = useField(props);

  return (
    <div className="tw-mb-6">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="tw-form-control tw-block tw-w-full tw-px-4 tw-py-2 tw-text-xl tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none"
        {...field}
        {...props}
      />
    </div>
  );
}
