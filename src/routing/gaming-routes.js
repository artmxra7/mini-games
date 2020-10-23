import { Route } from "react-router-dom";

function MatchThePair() {
    return <h2>Match the pair game page</h2>;
}

function Spin() {
    return <h2>Spin game page</h2>;
}

function Jackpot() {
    return <h2>Jackpot page</h2>;
}

function GamesCollection(){
    return <h2>My Games Collection</h2>
}

export default [    
    <Route path="/match-the-pair" key="match-the-pair" component={MatchThePair} />,
    <Route path="/spin" key="spin" component={Spin} />,
    <Route path="/jackpot" key="jackpot" component={Jackpot} />
]