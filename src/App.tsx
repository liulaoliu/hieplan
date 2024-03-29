import React, { useState } from "react";
import "./App.css";
import Welcome from "./Components/homePage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  log 页面
import SignIn from "./Components/SignIn/SignIn";
// Main 页面
import Main from "./Components/contentPage/Main";

import Note from "./Components/contentPage/Note";
import Project from "./Components/contentPage/Project";
import Position from "./Components/contentPage/Position";
import Tag from "./Components/contentPage/Tag";
import Nowhere from "./Components/404/Nowhere";

import colorModeStorage from "./Components/utils/ChangeAppColorMode";
import FunnyBar from "./Components/utils/funnybar/FunnyBar";
import watchAltAndEnter from "./Components/utils/watchAltAndEnter";
import Login from "./Components/Login/Login";
import Test from "./Components/contentPage/Test";
//  懒加载示范
const Task = React.lazy(() => import("./Components/contentPage/task/Task"));

export default function App() {
  /*
  该状态用于 维护 funnyBar
   */
  const [funnyBarVisible, setFunnyBarVisible] = React.useState(false);
  watchAltAndEnter(funnyBarVisible, setFunnyBarVisible);
  return (
    <div
      // i f you really hate x-direction scroll bar but you somehow have to use an absoluely positioned element, you can do this...
      className="App tw-relative"
      style={{
        minWidth: "450px",
      }}
    >
      <BrowserRouter>
        {/* 注意这种奇怪的配置方法， FunnyBar不和 任何 path相关，永远被渲染，但是他使用了 router的上下文
        useNavigate() may be used only in the context of a <Router> component.
        */}
        <FunnyBar
          funnybarVisible={funnyBarVisible}
          handleClose={setFunnyBarVisible}
        ></FunnyBar>
        {/* <Example></Example> */}
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
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route
            path="signIn"
            element={<SignIn mode={"signIn"} />}
          />
          <Route
            path="password/forgot"
            element={<SignIn mode={"password/forgot"} />}
          />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Nowhere />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
