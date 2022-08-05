import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChangeAppColorMode from "./Components/utils/ChangeAppColorMode";
import { getQuoteString } from "./Components/utils/quote/utils/index";
import someSayings from "./Components/utils/quote/someSayings";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/**
 * 更改网页的title
 */
document.title = getQuoteString(someSayings)[1]
  ? "高效ToDo"
  : getQuoteString(someSayings)[0];
/**
 * 设置网页的颜色模式
 */
ChangeAppColorMode.initialColorMode();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
