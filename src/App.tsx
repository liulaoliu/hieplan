import React from "react";
import "./App.css";
import Welcome from "./Components/homePage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/homePage/Login";
import Main from './Components/taskPage/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="main/*" element={<Main/>}></Route>
          <Route path="login" element={<Login />} />
          <Route path="/registration" element={<Login />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
