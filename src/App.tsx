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

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import colorModeStorage from "./Components/utils/colorModeStorage";

import blue from "@mui/material/colors/blue";

// Task 的懒加载
const Task = React.lazy(() => import("./Components/contentPage/task/Task"));

function DeafaultApp() {
  return (
    <div
      className="App"
      style={{
        minWidth: "450px",
      }}
    >
      <BrowserRouter>
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

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

//  以下是 切换深浅颜色 的 外侧 wrapper 也是 context的 provider
export default function App() {
  const defaultMode = colorModeStorage.getMode();
  // console.log('shit');

  const [mode, setMode] = React.useState<"light" | "dark">(() => {
    if (defaultMode === undefined) {
      return "light" as "light" | "dark";
    }
    return defaultMode as "light" | "dark";
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          colorModeStorage.setMode(colorModeStorage.diffMode(prevMode));
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );

  // overwrite background color depends on mode
  let background: { paper: string; default: string } = null as any;
  let primary: {
    main: string;
  } = null as any;
  let secondary: {
    main: string;
  } = null as any;

  // 改写 背景色
  if (mode === "dark") {
    background = { paper: "#0a1929", default: "#0a1929" };
  } else {
    background = { paper: "#fff", default: "#fff" };
  }
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DeafaultApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
