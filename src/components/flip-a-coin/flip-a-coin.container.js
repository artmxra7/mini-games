import { useState } from "react";
import FlipACoinComponent from "./flip-a-coin.component";
import headImage from "../../assets/game-thumbnails/head.png";
import tailImage from "../../assets/game-thumbnails/tail.png";

const FlipACoin = (props) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [winnerFace, setWinnerFace] = useState();
  const [candidateWin, setCandidateWin] = useState(0);
  const [universeWin, setUniverseWin] = useState(0);

  const startTheGame = (event) => {
    let clickedImage = event.target.alt;
    setIsFlipping(true);
    let winValue = Math.random();
    setWinnerFace(winValue >= 0.5 ? "TAIL" : "HEAD");
    setTimeout(() => {
      clickedImage === "headImage" && winnerFace === "HEAD"
        ? setCandidateWin(candidateWin + 1)
        : clickedImage === "tailImage" && winnerFace === "TAIL"
        ? setCandidateWin(candidateWin + 1)
        : setUniverseWin(universeWin + 1);
      setIsFlipping(false);
      setWinnerFace("HEAD");
    }, 5000);
  };

  return (
    <FlipACoinComponent
      isFlipping={isFlipping}
      setIsFlipping={setIsFlipping}
      startTheGame={startTheGame}
      winnerFace={winnerFace}
      candidateWin={candidateWin}
      universeWin={universeWin}
      setIsFlipping={setIsFlipping}
    />
  );
};

export default FlipACoin;
