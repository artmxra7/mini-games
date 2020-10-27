import { Route } from "react-router-dom";
import { SpinPage } from "pages";

function MatchThePair() {
    return <h2>Match the pair game page</h2>;
}

function Jackpot() {
    return <h2>Jackpot page</h2>;
}

function GamesCollection() {
    return <h2>My Games Collection</h2>
}

export default [
    <Route path="/match-the-pair" key="match-the-pair" component={MatchThePair} />,
    <Route path="/spin" key="spin" component={SpinPage} />,
    <Route path="/jackpot" key="jackpot" component={Jackpot} />
]