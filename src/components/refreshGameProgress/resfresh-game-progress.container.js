import { React } from "react";
import RefreshGameProgressComponent from "./refresh-game-progress.comopnent";

function RefreshGameProgress(props) {
  return (
    <RefreshGameProgressComponent
      handleClose={props.handleClose}
      open={props.open}
      handleGameRest={props.handleGameRest}
    />
  );
}

export default RefreshGameProgress;
