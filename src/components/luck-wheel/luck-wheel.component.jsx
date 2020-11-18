import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./luck-wheel.css";

const LuckWheelComponent = (props) => {
  const { isWheelSpining, offers, changeWheelRotation, randomDegree } = props;

  return (
    <Grid container>
      <Grid container>
        <Grid item sm={4} />
        <Grid item sm={8}>
          <Typography style={{ fontSize: "6vh", paddingTop: "12px" }}>
            Try your luck
          </Typography>
        </Grid>
        {/* <Grid item sm={4}></Grid> */}
      </Grid>

      <Grid container sm={6}></Grid>
      <Grid className="wheel" style={{ alignItem: "center" }}>
        <Grid className="wrapper">
          <Grid className="wheel">
            <Grid
              id="inner-wheel"
              style={{
                transform: `rotate(${randomDegree}deg)`,
                transitionDuration: isWheelSpining ? "5s" : "0s",
              }}
            >
              {offers.map((offer, index) => {
                return (
                  <Grid
                    key={index + 1}
                    className={`wheelSection${index + 1} wheelSection`}
                  >
                    <Typography className="primaryOfferText">
                      {offer.firstOffer}
                    </Typography>
                    <Typography className="secondaryOfferText">
                      {offer.secondOffer}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              id="spin"
              className="animateSpinButton"
              onClick={() => changeWheelRotation(true)}
              style={{
                animation: isWheelSpining
                  ? "0"
                  : "beat 0.5s infinite alternate",
              }}
            >
              <Grid id="inner-spin">Spin</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LuckWheelComponent;
