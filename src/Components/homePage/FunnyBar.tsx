import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useChangeColorMode } from "../utils/ColorChangeIcon";
/**
 * funnnyBar的 特殊功能 （输入+回车）
 */

const possibility = [
  "login",
  "登录",
  "main",
  "task",
  "change",
  "color",
  "home",
];

type isSomething = (val: string) => boolean | undefined;
function isLogin(value: string) {
  if (value === "login" || value === "登录") {
    return true;
  }
}

function isMain(value: string) {
  if (value === "main" || value === "task") {
    return true;
  }
}

function isChangeColorMode(value: string) {
  if (value === "color" || value === "change") {
    return true;
  }
}
const isHome: isSomething = function (value) {
  if (value === "home") {
    return true;
  }
};
type Props = {
  visible?: boolean;
  color?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
};
/**
 * 
使用了 mui布局组件的 仿搜索bar 是一个 absolute定位的bar
 */
export default function FunnyBar({ visible, color }: Props) {
  const [input, setInput] = useState("");
  /** 用于跳转的 工具 */
  const navigate = useNavigate();

  const changeColorModeTool = useChangeColorMode().toggleColorMode;

  if (!visible && visible !== undefined) {
    return <div></div>;
  }

  return (
    <Grid
      container
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        zIndex: 9999,
        minWidth: "800px",
      }}
    >
      <Grid
        item
        textAlign="center"
        xs={12}
        sm={10}
        md={8}
        margin="auto"
        sx={{
          transition: "all 0.5s",
        }}
      >
        <TextField
          fullWidth
          label="运气不错"
          variant="filled"
          color={color ? color : "success"}
          autoFocus={true}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              if (possibility.includes(input)) {
                if (isLogin(input)) {
                  navigate("/login");
                }
                if (isMain(input)) {
                  navigate("/main");
                }
                if (isChangeColorMode(input)) {
                  changeColorModeTool();
                }
                if (isHome(input)) {
                  navigate("/");
                }
              }
              setInput("");
            }
          }}
        />
      </Grid>
    </Grid>
  );
}
