import React, { ReactElement } from "react";
import Sidebar from "./Sidebar";
import styles from "./task.module.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Note from "./Note";

interface Props {}

export default function Task({}: Props): ReactElement {



  
  return (
    <div className={styles.task_container}>
      TASK cONTENT
    </div>
  );
}
