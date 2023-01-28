import React, { ReactElement, ReactNode } from "react";
import { ButtonType, ButtonSize, buttonSize, buttonType } from "./theme";
import cs from "classnames";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size: buttonSize;
  color: buttonType;
  onClick?: () => void;

}

export default function Button({
  children,
  size,
  color,
  onClick,
}: Props): ReactElement {
  let classNames = `${ButtonType[color]} ${ButtonSize[size]}`;
  if (onClick === undefined) {
    // 这有用吗?
    onClick = () => {};
  }

  return (
    <button className={cs(classNames)} onClick={onClick}>
      {children}
    </button>
  );
}
