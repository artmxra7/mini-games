import { Grid, Icon, Typography, Button } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/Star";
import ReplayIcon from "@material-ui/icons/Replay";
import { FlippingCard, RefreshGameProgress } from "components";

const MatchTheCardPairComponent = (props) => {
  const {
    gameData,
    saveTheGameData,
    goToNextStage,
    flipThisCard,
    openRefreshGameModal,
    setOpenRefreshGameModal,
    handleGameRest,
  } = props;

  return (
    <Grid container>
      <Grid container direction="row" justify="space-evenly" marginTop="22%">
        <Grid
          item
          style={{
            // paddingTop: "2%",
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
          <Icon color="secondary">
            <StarOutlineIcon />
          </Icon>
          <Icon color="primary">
            <StarOutlineIcon />
          </Icon>
          <Icon color="action">
            <StarOutlineIcon />
          </Icon>
          <Icon color="error">
            <StarOutlineIcon />
          </Icon>
          <Icon color="disable">
            <StarOutlineIcon />
          </Icon>
        </Grid>
        <Grid item>{gameData.moves} Moves</Grid>
        <Grid item onClick={goToNextStage}>
          <Typography>
            Time:
            {gameData.time}
          </Typography>
        </Grid>
        <Grid item onClick={saveTheGameData}>
          <Typography>Stage: {gameData.stage}</Typography>
        </Grid>
        <Button
          // variant="contained"
          // color="primary"
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
          background:
            "-webkit-linear-gradient(290deg, #02CCBA 0%, #AA7ECD 100%)",
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
