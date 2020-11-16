import React from "react";
import { GamesNavBar, Jackpot } from "components";
import { Grid, Paper } from "@material-ui/core";

const JackpotPageComponent = () => {
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container>
        <GamesNavBar />
        <Grid item xs={3} />
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            alignItems: "center",
            justify: "center",
            minWidth: "50%",
            maxWidth: "50%",
            minHeight: "100%",
            marginLeft: "-13%",
          }}
        >
          <Jackpot />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JackpotPageComponent;
