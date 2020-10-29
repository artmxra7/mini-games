import React, { useState, useEffect } from "react";
import MatchTheCardPairComponent from "./card-pair-matching.component";
import _ from "lodash";
import { nanoid } from "nanoid";

const MatchTheCardPair = () => {
  const [gameData, setGameData] = useState({
    cards: [],
    gameNotYetInitialized: true,
  });

  const startTheGame = () => {
    let savedGameData =
      localStorage.getItem("GameData-matchTheCardPair") || "{}";

    savedGameData = JSON.parse(savedGameData);

    if (_.isEmpty(savedGameData) || savedGameData.gameNotYetInitialized) {
      setGameData(generateGameDataForStage(1));
      saveTheGameData();
    } else {
      setGameData(savedGameData);
    }
  };

  useEffect(() => {
    if (gameData.gameNotYetInitialized) {
      startTheGame();
    }
  }, [gameData.gameNotYetInitialized]);

  useEffect(() => {
    saveTheGameData();
  }, [gameData]);

  const saveTheGameData = () => {
    localStorage.setItem("GameData-matchTheCardPair", JSON.stringify(gameData));
  };

  const goToNextStage = () => {
    setGameData(generateGameDataForStage(gameData.stage + 1));
  };

  const flipThisCard = (cardId) => {
    let card = _.find(gameData.cards, { id: cardId });
    card.face = card.face === "BACK" ? "FRONT" : "BACK";
    setGameData({ ...gameData });
  };

  return (
    <MatchTheCardPairComponent
      saveTheGameData={saveTheGameData}
      gameData={gameData}
      goToNextStage={goToNextStage}
      flipThisCard={flipThisCard}
    />
  );
};

function generateGameDataForStage(stage) {
  let gameDataForStage = {
    stage: stage,
    cards: [],
  };

  let secretValues = _.shuffle(
    _.range(1, stage + 1).concat(_.range(1, stage + 1))
  );

  gameDataForStage.cards = secretValues.map((secretValue) => {
    return {
      secretValue: secretValue,
      face: "FRONT",
      id: nanoid(),
    };
  });

  return gameDataForStage;
}

export default MatchTheCardPair;
