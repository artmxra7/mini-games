import { Grid, Icon, Typography } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/Star";
import ReplayIcon from "@material-ui/icons/Replay";
import { FlippingCard } from "components";

const MatchTheCardPairComponent = (props) => {
  const { gameData, saveTheGameData, goToNextStage, flipThisCard } = props;

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Match The Pair
        </Typography>
      </Grid>
      <Grid container spacing={4}>
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
        <Grid item>0 Moves</Grid>
        <Grid item onClick={goToNextStage}>
          <Typography>
            Time 0:00 <ReplayIcon />
          </Typography>
        </Grid>

        <Grid item onClick={saveTheGameData}>
          <Typography>Stage: 4</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {gameData.cards.map((card) => {
          return (
            <Grid item key={card.id} sm={3}>
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
    </Grid>
  );
};

export default MatchTheCardPairComponent;
