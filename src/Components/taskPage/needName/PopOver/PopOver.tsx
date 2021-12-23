import { AnyARecord } from "dns";
import React, { ReactElement, ReactPropTypes, useState } from "react";
import styles from "./PopOver.module.css";
interface Props {}

export default function PopOver(props:any): ReactElement {
 const [status, setstate] = useState(false);

 const setActive =()=> setstate(true);
 const setInactive=()=> setstate(false);


  return (
    <div 
    onClick={setActive}
    className={styles.popover_container_as_place_holder}>
      {props.children}
      <div
        onClick={(e)=>{
          e.stopPropagation();
          setInactive()
        }}
      className={status===true?styles.overlay_active:styles.overlay_inactive}></div>
    </div>
  );
}
