import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Task from './Task';
import Note from './Note';
import Sidebar from "./Sidebar";


interface Props {}

export default function Main({}: Props): ReactElement {
  return (
    <div>
        <Sidebar></Sidebar>
      <Routes>
        <Route path="task" element={<Task />}></Route>
        <Route path="note" element={<Note />} />
      </Routes>
    </div>
  );
}
