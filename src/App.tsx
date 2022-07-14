import React, { useState } from "react";
import "./App.css";
import Welcome from "./Components/homePage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  log 页面
import Login from "./Components/Login/Login";
// Main 页面
import Main from "./Components/contentPage/Main";

import Note from "./Components/contentPage/Note";
import Project from "./Components/contentPage/Project";
import Position from "./Components/contentPage/Position";
import Tag from "./Components/contentPage/Tag";
import Nowhere from "./Components/404/Nowhere";

import colorModeStorage from "./Components/utils/colorModeStorage";
import FunnyBar from "./Components/utils/funnybar/FunnyBar";
import watchAltAndEnter from "./Components/utils/watchAltAndEnter";
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
      {/* <button
        className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-my-2"
        onClick={() => {
          colorModeStorage.preferOsColorMode();
        }}
      >
        跟随系统
      </button>
      <div> </div>
      <button
        className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded"
        onClick={() => {
          colorModeStorage.changeColorMode();
        }}
      >
        手动切换
      </button> */}

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
          </Route>
          <Route path="login" element={<Login mode={"login"} />} />
          <Route
            path="registration"
            element={<Login mode={"registration"} />}
          />
          <Route
            path="password/forgot"
            element={<Login mode={"password/forgot"} />}
          />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Nowhere />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
