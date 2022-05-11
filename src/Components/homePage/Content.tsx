import { Box, Container, CssBaseline, Typography, Grid } from "@mui/material";
import React, { ReactElement } from "react";

import Logo from "./Logo";
import FunnyBar from "./FunnyBar";



export default function Content(): ReactElement {
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
            <FunnyBar></FunnyBar>
          </Box>
        </Container>
      </CssBaseline>
    </div>
  );
}
