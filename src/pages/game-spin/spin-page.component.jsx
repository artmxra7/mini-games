import React from "react";
import { GamesNavBar, SpinWheel } from "components";
import { Grid, Paper } from "@material-ui/core";

const SpinPageComponent = () => {
  return (
    <Grid container>
      <GamesNavBar />
      <Grid container justify="center" align="center">
        <Paper>
          <SpinWheel />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SpinPageComponent;
