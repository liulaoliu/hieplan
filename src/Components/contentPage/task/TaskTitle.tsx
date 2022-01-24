import React, { ReactElement } from "react";
import styles from "./TaskTitle.module.css";
interface Props {}

export default function TaskTitle({}: Props): ReactElement {
 
  
  return <div>
    <div className={styles.date}></div>
  </div>;
}
