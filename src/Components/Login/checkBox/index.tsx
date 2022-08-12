import React, { ReactElement, ReactNode } from "react";
import checkIcon from "./asset/check_icon.svg";
import { useField } from "formik";
import { inputProp } from "../input/index";

interface Props extends inputProp {
  text: string;
  // children>: ReactNode;
}

// checked:tw-bg-blue-600 checked:tw-border-blue-600 ==> checkIcon
/**
 * 
 * a checkbox like 'remember me ' with a 'check symbol' in it
  是 ‘保持登陆’ 这样的复选框
 */
export default function CheckBox({
  ...props
}: Omit<Props, "placeholder">): ReactElement {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta, helpers] = useField({ ...props, type: "checkbox" });

  return (
    <div className="tw-form-group tw-form-check">
      <input
        {...field}
        {...props}
        type="checkbox"
        className="tw-form-check-input tw-appearance-none tw-h-4 tw-w-4 tw-border tw-border-gray-300 tw-rounded-sm tw-bg-white
              focus:tw-outline-none tw-transition tw-duration-200 tw-mt-1 tw-align-top tw-bg-no-repeat tw-bg-center tw-bg-contain tw-float-left tw-mr-2 tw-cursor-pointer
              "
        style={{
          backgroundImage: field.checked === true ? `url(${checkIcon})` : "",
        }}
      />
      <label
        onClick={() => {
          helpers.setValue(!field.value);
        }}
        htmlFor={props.label}
        className="tw-form-check-label tw-inline-block tw-text-gray-800 dark:tw-text-slate-200 hover:dark:tw-text-slate-300 focus:dark:tw-text-slate-300 active:dark:tw-text-slate-100"
      >
        {props.text}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
