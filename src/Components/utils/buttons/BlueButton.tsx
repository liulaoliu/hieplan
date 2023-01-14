import React, { ReactElement } from "react";

interface Props {
  // extends React.DetailedHTMLProps<
  //   React.ButtonHTMLAttributes<HTMLButtonElement>,
  //   HTMLButtonElement
  // >
  disabled: boolean;
  children?: React.ReactNode;
}

const BlueButton = React.forwardRef(
  (props: Props, ref: React.LegacyRef<HTMLButtonElement> | undefined) => {
    return (
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
        disabled={props.disabled}
        ref={ref}
        //   disabled={isValid === false || dirty === false}
      >
        {props.children}
      </button>
    );
  }
);

export default BlueButton;
