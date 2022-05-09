import { Box, Container, CssBaseline, Typography, Grid } from "@mui/material";
import React, { ReactElement } from "react";

import Logo from "./Logo";
import TextField from "@mui/material/TextField";
import SignInSlide from "../singIn/SignIn";

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
            <Grid container>
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
                  color="success"
                  focused
                />
              </Grid>
            </Grid>
          </Box>

          {/* <h1 className="text-3xl font-bold ">记录个人待办事项</h1>
          <h6 className="text-3xl font-bold text-orange-900  ">
            跟上时间的步伐 做时间的主人
          </h6> */}
        </Container>
      </CssBaseline>
    </div>
  );
}
