import React, { ReactElement } from "react";
import Sidebar from "../../sidebar/Sidebar";
import ContentLayout from "../contentLayout/ContentLayout";

// import styles from "./task.module.css";

interface Props {}

export default function Task({}: Props): ReactElement {
  return (
    <div className="dark_side">
      <ContentLayout
        title={<div>这是tittle!!!!!!!!!!!!!!!!!!</div>}
        content={<div>这是 contetn</div>}
      ></ContentLayout>
    </div>
  );
}
