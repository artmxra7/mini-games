import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import { ContactSupport } from "@material-ui/icons";

function FlippingCardComponent(props) {
  let { secretValue, face, flipThisCard, id } = props;
  const styles = {
    frontFace: {
      backgroundColor: "#0099ff",
      height: "200px",
      transform: "rotateY(360deg)",
      transition: "transform .2s ease",
    },
    backFace: {
      backgroundColor: "#9922ff",
      height: "200px",
      transform: "rotateY(-360deg)",
      transition: "transform .2s ease",
      alignItem: "center",
    },
  };

  return (
    <Card
      onClick={() => flipThisCard(id)}
      style={face === "FRONT" ? styles.frontFace : styles.backFace}
    >
      <CardContent>
        {face === "FRONT" ? (
          <Typography>{"FRONT" + secretValue}</Typography>
        ) : (
          <Typography></Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default FlippingCardComponent;
