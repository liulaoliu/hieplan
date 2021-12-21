import React from "react";
import "./App.css";
import Welcome from "./Components/homePage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  log 页面
import Login from "./Components/homePage/Login";
// Main 页面
import Main from "./Components/taskPage/Main";
import Task from "./Components/taskPage/Task";
import Note from "./Components/taskPage/Note";
import Project from "./Components/taskPage/Project";
import Position from "./Components/taskPage/Position";
import Tag from "./Components/taskPage/Tag";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<Main />}>
            <Route path="task" element={<Task />} />
            <Route path="note" element={<Note />} />
            <Route path="project" element={<Project />} />
            <Route path="position" element={<Position />} />
            <Route path="tag" element={<Tag />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Login />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
