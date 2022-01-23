import React from "react";
import "./App.css";
import Welcome from "./Components/homePage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  log 页面
import Login from "./Components/homePage/Login";
// Main 页面
import Main from "./Components/contentPage/Main";

import Note from "./Components/contentPage/Note";
import Project from "./Components/contentPage/Project";
import Position from "./Components/contentPage/Position";
import Tag from "./Components/contentPage/Tag";
import Nowhere from "./Components/404/Nowhere";

const Task = React.lazy(() => import("./Components/contentPage/task/Task"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*  还没有4o4 */}
        <Routes>
          <Route path="main" element={<Main />}>
            <Route
              path="task"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Task />
                </React.Suspense>
              }
            />

            <Route path="note" element={<Note />} />
            <Route path="project" element={<Project />} />
            <Route path="position" element={<Position />} />
            <Route path="tag" element={<Tag />} />
            <Route path="search" element={<Tag />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Nowhere />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
