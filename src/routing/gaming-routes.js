import { Route } from "react-router-dom";
import { SpinPage, MatchTheCardPairPage, JackpotPage, FlipACoin } from "pages";

export default [
  <Route
    path="/match-the-pair"
    key="match-the-card-pair"
    component={MatchTheCardPairPage}
  />,
  <Route path="/spin" key="spin" component={SpinPage} />,
  <Route path="/jackpot" key="jackpot" component={JackpotPage} />,
  <Route path="/flip-a-coin" key="flip-a-coin" component={FlipACoin} />,
];
