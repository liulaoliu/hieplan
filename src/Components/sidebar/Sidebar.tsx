import React, { ReactElement } from "react";
import styles from "./Sidebar.module.css";
interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return <div className={styles.width}>我是sidebar</div>;
}

