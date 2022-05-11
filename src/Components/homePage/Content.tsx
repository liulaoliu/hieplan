import { Box, Container, CssBaseline, Typography, Grid } from "@mui/material";
import React, { ReactElement, useState } from "react";

import Logo from "./Logo";
import FunnyBar from "./FunnyBar";
import watchAltAndEnter from "../utils/watchAltAndEnter";

export default function Content(): ReactElement {
  const [barStatus, setbarStatus] = useState(true);

  watchAltAndEnter(barStatus, setbarStatus);

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
          <Box>
            {/* handler ={setbarStatus} */}
            <FunnyBar visible={barStatus}></FunnyBar>
          </Box>
        </Container>
      </CssBaseline>
    </div>
  );
}
