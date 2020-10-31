import { useState } from "react";
import FlipACoinComponent from "./flip-a-coin.component";

const FlipACoin = (props) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [winnerFace, setWinnerFace] = useState("HEAD");

  const startTheGame = () => {
    setIsFlipping(true);
    setWinnerFace(Math.random() >= 0.5 ? "TAIL" : "HEAD");
  };

  return (
    <FlipACoinComponent
      isFlipping={isFlipping}
      setIsFlipping={setIsFlipping}
      startTheGame={startTheGame}
      winnerFace={winnerFace}
    />
  );
};

export default FlipACoin;
