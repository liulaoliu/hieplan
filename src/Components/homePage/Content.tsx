import { Box, Container, CssBaseline, Typography, Grid } from "@mui/material";
import React, { ReactElement, useState } from "react";

import Logo from "./Logo";
import FunnyBar from "./FunnyBar";
import watchAltAndEnter from "../utils/watchAltAndEnter";

export default function Content(): ReactElement {
  // 不在此处使用，提升到顶层
  // const [barStatus, setbarStatus] = useState(true);

  // watchAltAndEnter(barStatus, setbarStatus);

  return (
    <div
      style={{
        marginTop: "2rem",
        minWidth: "300px",
      }}
    >
      <CssBaseline>
        <Container>
          <Box>
            <Grid container>
              <Grid item textAlign="center" xs={12}>
                <Logo></Logo>
              </Grid>
            </Grid>
          </Box>
          {/* <Box>
            <FunnyBar visible={barStatus}></FunnyBar>
          </Box> */}
        </Container>
      </CssBaseline>
    </div>
  );
}
