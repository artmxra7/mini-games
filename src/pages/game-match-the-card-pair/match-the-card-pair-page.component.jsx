import React from "react";
import { GamesNavBar, MatchTheCardPair } from "components";
import { Grid, Paper } from "@material-ui/core";

const MatchTheCardPairComponent = () => {
  return (
    <Paper>
      <Grid container>
        <GamesNavBar />
        <Grid item xs={3} />
        <Grid item xs={6} style={{ border: "5px solid red" }}>
          <MatchTheCardPair />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MatchTheCardPairComponent;
