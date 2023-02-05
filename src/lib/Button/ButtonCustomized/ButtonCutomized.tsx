import React, { ReactElement, ReactNode } from "react";
import { ButtonType, buttonType } from "../theme";
import cs from "classnames";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  height: number;
  width: number;
  color: buttonType;
  onClick?: (e?: any) => void;
}
/*
a button component,but you have to customize its height and width
 */
export default function ButtonCustomized({
  children,
  height,
  width,
  color,
  onClick,
}: Props): ReactElement {
  let classNames = `${ButtonType[color]}`;
  /**height and width */

  if (onClick === undefined) {
    // 这有用吗?
    onClick = () => {};
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      style={{
        height: height + "rem",
        width: width + "rem",
        minWidth: width + "rem",
        minHeight: height + "rem",
      }}
    >
      {children}
    </button>
  );
}
