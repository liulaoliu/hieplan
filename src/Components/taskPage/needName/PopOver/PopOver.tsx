import React, { ReactElement } from "react";
import styles from "./PopOver.module.css"
interface Props {}

export default function PopOver({}: Props): ReactElement {
    console.log('popover');
    
  return <div>
      <div className={styles.place_holder}></div>
      <div className={styles.overlay}></div>

  </div>;
}
