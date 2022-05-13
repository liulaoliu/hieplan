import React from "react";
//  下方是 改变颜色模式的 模板
import IconButton from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../App";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type Props = {};

export default function ColorChangeIcon({}: Props) {
  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

export function useChangeColorMode() {
  const colorMode = React.useContext(ColorModeContext);
  return colorMode;

}

