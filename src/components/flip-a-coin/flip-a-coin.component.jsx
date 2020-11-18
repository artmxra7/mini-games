import { Avatar, Grid, Typography } from "@material-ui/core";
import vsImage from "../../assets/game-thumbnails/vs.png";
import headImage from "../../assets/game-thumbnails/head.png";
import tailImage from "../../assets/game-thumbnails/tail.png";
import "./flip-a-coin.css";

const FlipACoinComponent = (props) => {
  const {
    isFlipping,
    startTheGame,
    winnerFace,
    candidateWin,
    universeWin,
    setIsFlipping,
  } = props;
  let x;
  const flipCoinStyle = {
    head: {
      height: "15vh",
      width: "15vh",
    },
    tail: {
      height: "15vh",
      width: "15vh",
      backfaceVisibility: "hidden",
    },
  };
  return (
    <Grid container>
      <Grid container>
        <Grid item xs={3} />
        <Grid item>
          <Typography component="h3" style={{ fontSize: "5vh" }}>
            Flip A Coin
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Typography style={{ fontSize: "4vh" }}>You</Typography>
          <Typography style={{ fontSize: "3vh" }}>{candidateWin}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar
            alt="vs"
            src={vsImage}
            style={{ height: "15vh", width: "15vh" }}
          ></Avatar>
        </Grid>
        <Grid item xs={3}>
          <Typography style={{ fontSize: "4vh" }}>Universe</Typography>
          <Typography style={{ fontSize: "3vh" }}>{universeWin}</Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" style={{ height: "70vh" }}>
        <Grid
          item
          xs={8}
          style={{
            display: isFlipping ? "flex" : "none",
            alignItems: "flex-end",
          }}
        >
          <Avatar
            alt="head"
            className="headCoin"
            src={
              isFlipping
                ? headImage
                : winnerFace === "HEAD"
                ? headImage
                : tailImage
            }
            style={
              winnerFace === "HEAD" ? flipCoinStyle.head : flipCoinStyle.tail
            }
          ></Avatar>
          <Avatar
            alt="tail"
            className="tailCoin"
            src={
              isFlipping
                ? tailImage
                : winnerFace === "HEAD"
                ? headImage
                : tailImage
            }
            style={
              winnerFace === "HEAD" ? flipCoinStyle.tail : flipCoinStyle.head
            }
          ></Avatar>
        </Grid>

        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography style={{ fontSize: "7vh", paddingLeft: "3vw" }}>
            Pick one:
          </Typography>

          <Avatar
            alt="headImage"
            src={headImage}
            style={{ height: "26vh", width: "26vh" }}
            onClick={startTheGame}
          ></Avatar>

          <Avatar
            alt="tailImage"
            src={tailImage}
            style={{ height: "30vh", width: "30vh" }}
            onClick={startTheGame}
          ></Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FlipACoinComponent;
