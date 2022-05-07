import { Box, Typography } from "@mui/material";

import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div
      style={{
        minWidth: "600px",
        userSelect: "none",
      }}
    >
      <Typography
        // className="bg-lime-700"

        fontSize={"5rem"}
        // sx={{
        //   fontSize: {
        //     lg: "5rem",
        //     md: "3rem",
        //     sm: "2rem",
        //     xs: "1rem",
        //   },
        // }}
      >
        高效ToDo
      </Typography>
    </div>
  );
}
