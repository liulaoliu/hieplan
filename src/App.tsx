import React, { useState } from "react";
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

import colorModeStorage from "./Components/utils/colorModeStorage";
import FunnyBar from "./Components/homePage/FunnyBar";
import watchAltAndEnter from "./Components/utils/watchAltAndEnter";

//  懒加载示范
const Task = React.lazy(() => import("./Components/contentPage/task/Task"));

// export default function App() {
//   /*
//   该状态用于 维护 funnyBar
//    */
//   const [funnyBarVisible, setFunnyBarVisible] = React.useState(false);
//   watchAltAndEnter(funnyBarVisible, setFunnyBarVisible);
//   return (
//     <div
//       className="App"
//       style={{
//         minWidth: "450px",
//       }}
//     >
//       <BrowserRouter>
//         {/* 注意这种奇怪的配置方法， FunnyBar不和 任何 path相关，永远被渲染，但是他使用了 router的上下文
//         useNavigate() may be used only in the context of a <Router> component.
//         */}
//         <FunnyBar color={"warning"} visible={true}></FunnyBar>
//         <Routes>
//           <Route path="main" element={<Main />}>
//             <Route
//               path="task"
//               element={
//                 <React.Suspense fallback={<>...</>}>
//                   <Task />
//                 </React.Suspense>
//               }
//             />

//             <Route path="note" element={<Note />} />
//             <Route path="project" element={<Project />} />
//             <Route path="position" element={<Position />} />
//             <Route path="tag" element={<Tag />} />
//             <Route path="search" element={<Tag />} />
//           </Route>
//           <Route path="login" element={<Login mode={"login"} />} />
//           <Route
//             path="registration"
//             element={<Login mode={"registration"} />}
//           />
//           <Route
//             path="password/forgot"
//             element={<Login mode={"password/forgot"} />}
//           />
//           <Route path="/" element={<Welcome />} />
//           <Route path="*" element={<Nowhere />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default function App() {
  const [state, setstate] = React.useState(0);
  const totalItem = 4;
  /**tailwind css;
   * ∵ h-1	height: 0.25rem; 4px.
   * ∴ h-28 height: 0.25 *28 =7rem;
   *
   */
  const tailwindHeightRemUnit = 0.25;
  function click() {
    const totalHeight = (totalItem - 1) * 7;
    if (state >= totalHeight) {
      setstate(0);
    } else {
      setstate(state + 7);
    }
  }

  // function addEssentialClassName() {
  //   const array = Array(3).fill("null");

  //   const result = array.map((item, idx) => {
  //     return idx * 7;
  //   });
  //   return result;
  // }
  // console.log(addEssentialClassName());
  return (
    <div className="relative  bg-slate-600 h-28 w-80 mt-52 ml-44 overflow-y-hidden ">
      {/* <div className="hidden">
        {addEssentialClassName().map((item, idx) => {
          return <li key={idx} className={`-translate-y-[${item}rem`}></li>;
        })}
      </div> */}
      <div
        className={
          "container absolute  duration-500 ease" +
          ` -translate-y-[${state}rem]`
        }
        onClick={() => {
          click();
        }}
      >
        <div className="h-28">
          <h1 className="bg-black text-white h-28">1</h1>
        </div>
        <div className="h-28">
          <h1 className="bg-black text-white h-28">2</h1>
        </div>
        <div className="h-28">
          <h1 className="bg-black text-white h-28">3</h1>
        </div>
        <div className="h-28">
          <h1 className="bg-black text-white h-28">4</h1>
        </div>
      </div>
    </div>
  );
}
