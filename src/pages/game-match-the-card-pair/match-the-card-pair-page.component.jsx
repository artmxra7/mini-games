import React from "react";
import { GamesNavBar, MatchTheCardPair } from "components";
import { Grid, Paper } from "@material-ui/core";

const MatchTheCardPairComponent = () => {
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container>
        <GamesNavBar />
        <Grid item xs={3} />
        <Grid
          item
          xs={3}
          style={{
            // border: "5px solid red",
            display: "flex",
            alignItems: "center",
            justify: "center",
            minWidth: "50%",
            maxWidth: "50%",
            minHeight: "100%",
            marginLeft: "-13%",
          }}
        >
          <MatchTheCardPair />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MatchTheCardPairComponent;
