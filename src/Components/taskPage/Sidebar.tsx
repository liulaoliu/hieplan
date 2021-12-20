import React, { ReactElement } from "react";
import styles from "./task.module.css";
interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return <div className={styles.sidebar}></div>;
}
