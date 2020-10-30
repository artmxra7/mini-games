import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

function FlippingCardComponent(props) {
  let { secretValue, face, flipThisCard, id } = props;
  const styles = {
    frontFace: {
      backgroundColor: "#00D0BA",
      height: "6vw",
      width: "6vw",
      transform: "rotateY(360deg)",
      transition: "transform .1s ease",
      boxShadow: "0 0 7px 0 gray",
      borderRadius: "10%",
    },
    backFace: {
      backgroundColor: "#2e3d49",
      height: "6vw",
      width: "6vw",
      transform: "rotateY(-360deg)",
      transition: "transform .1s ease",
      boxShadow: "0 0 7px 0 gray",
      borderRadius: "10%",
    },
  };

  return (
    <Grid
      onClick={() => flipThisCard(id)}
      style={face === "FRONT" ? styles.frontFace : styles.backFace}
    >
      <Grid
        style={{ height: "100%" }}
        container
        justify="center"
        alignItems="center"
      >
        {face === "FRONT" ? (
          <Typography variant="h5">{secretValue}</Typography>
        ) : (
          <Typography></Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default FlippingCardComponent;
