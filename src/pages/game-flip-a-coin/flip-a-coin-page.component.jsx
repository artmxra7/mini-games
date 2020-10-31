import React from "react";
import { GamesNavBar, FlipACoin } from "components";
import { Grid, Paper } from "@material-ui/core";

const FlipACoinPageComponent = () => {
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container>
        <GamesNavBar />
        <Grid item xs={4} />
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
          <FlipACoin />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FlipACoinPageComponent;
