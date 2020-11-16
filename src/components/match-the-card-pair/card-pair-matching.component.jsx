import { Grid, Icon, Typography, Button } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/Star";
import ReplayIcon from "@material-ui/icons/Replay";
import { FlippingCard, RefreshGameProgress } from "components";

const MatchTheCardPairComponent = (props) => {
  const {
    gameData,
    saveTheGameData,
    flipThisCard,
    openRefreshGameModal,
    setOpenRefreshGameModal,
    handleGameRest,
    time,
  } = props;
  return (
    <Grid container>
      <Grid container direction="row" justify="space-evenly" marginTop="22%">
        <Grid
          item
          style={{
            position: "fixed",
            zIndex: "2",
            marginLeft: "-5%",
            backgroundColor: "#424242",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Match The Pair
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        justify="center"
        style={{
          paddingTop: "8%",
          position: "fixed",
          zIndex: "1",
          marginLeft: "-26%",
          backgroundColor: "#424242",
        }}
      >
        <Grid item>
          <Icon style={{ color: gameData.stars >= 1 ? "yellow" : "grey" }}>
            <StarOutlineIcon />
          </Icon>
          <Icon style={{ color: gameData.stars >= 2 ? "yellow" : "grey" }}>
            <StarOutlineIcon />
          </Icon>
          <Icon style={{ color: gameData.stars >= 3 ? "yellow" : "grey" }}>
            <StarOutlineIcon />
          </Icon>
          <Icon style={{ color: gameData.stars >= 4 ? "yellow" : "grey" }}>
            <StarOutlineIcon />
          </Icon>
          <Icon style={{ color: gameData.stars >= 5 ? "yellow" : "grey" }}>
            <StarOutlineIcon />
          </Icon>
        </Grid>
        <Grid item>
          <Typography>{gameData.moves} Moves</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Time:&nbsp;
            {time}
          </Typography>
        </Grid>
        <Grid item onClick={saveTheGameData}>
          <Typography>Stage: {gameData.stage}</Typography>
        </Grid>
        <Button
          onClick={() => setOpenRefreshGameModal(true)}
          startIcon={<ReplayIcon />}
        ></Button>
      </Grid>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        style={{
          marginTop: "23%",
          marginBottom: "10%",
          boxShadow: "0px 0px 10px 0px grey",
          background: "linear-gradient(290deg, #02CCBA 0%, #AA7ECD 100%)",
          background: "linear-gradient(160deg, #02CCBA 0%, #AA7ECD 100%)",
          borderRadius: "1%",
          height: "fit-content",
        }}
      >
        {gameData.cards.map((card) => {
          return (
            <Grid
              item
              key={card.id}
              sm={2}
              directio1n="row"
              style={{
                minHeight: "5%",
                maxHeight: "5%",
                minWidth: "15%",
                maxWidth: "15%",
                margin: "20px 10px 20px 10px",
              }}
            >
              <FlippingCard
                flipThisCard={flipThisCard}
                secretValue={card.secretValue}
                face={card.face}
                id={card.id}
                isMatched={card.isMatched}
              />
            </Grid>
          );
        })}
      </Grid>
      <RefreshGameProgress
        open={openRefreshGameModal}
        handleClose={() => setOpenRefreshGameModal(false)}
        handleGameRest={handleGameRest}
      />
    </Grid>
  );
};

export default MatchTheCardPairComponent;
