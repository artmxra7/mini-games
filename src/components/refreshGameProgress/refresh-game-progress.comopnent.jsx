import { Button, Grid, Modal, Typography } from "@material-ui/core";

const RefreshGameProgressComponent = (props) => {
  const { handleClose, open, handleGameRest } = props;
  return (
    <Grid container>
      <Modal open={open} onClose={handleClose}>
        <Grid
          container
          style={{
            // position: "relative",
            width: "36%",
            height: "45%",
            backgroundColor: "rgb(255, 255, 255)",
            border: "2px solid rgb(0, 0, 0)",
            boxShadow: " 10px 10px 10px 10px black",
            marginLeft: "30%",
            marginTop: "15%",
          }}
        >
          <Grid
            container
            style={{
              marginLeft: "35%",
              // fontSize: "50px !important",
              paddingTop: "10%",
            }}
          >
            <Typography>Are you sure?</Typography>
          </Grid>
          <Grid container style={{ marginLeft: "30%" }}>
            <Grid item>
              <Typography>Your progress will be Lost!</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGameRest}
              style={{ marginLeft: "20%", marginTop: "5%", height: "30%" }}
            >
              Yes, Restart again!
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              style={{ marginLeft: "5%", marginTop: "5%", height: "30%" }}
            >
              cancel
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
};

export default RefreshGameProgressComponent;
