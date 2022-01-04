import React, { ReactElement } from "react";
import styles from "./SidebarBlockChangeByClick.module.css";
interface Props {
  children: ReactElement | ReactElement[];
  status: boolean;
}

export default function SidebarBlockChangeByClick({
  children,
  status,
}: Props): ReactElement {
  return (
    <div className={status ? styles.color_shoud_change : styles.normal}>
      {children}
    </div>
  );
}
