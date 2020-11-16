import React, { useState, useEffect } from "react";
import MatchTheCardPairComponent from "./card-pair-matching.component";
import _ from "lodash";
import { nanoid } from "nanoid";
import __ from "underscore";

const MatchTheCardPair = () => {
  const [gameData, setGameData] = useState({
    stage: 0,
    cards: [],
    gameNotYetInitialized: true,
    // time: "00:00",
    moves: 0,
    openedElement: 0,
    clickedElement: 0,
    stars: 5,
  });
  const [time, setTime] = useState("00:00");
  const [openRefreshGameModal, setOpenRefreshGameModal] = useState(false);
  const startTheGame = () => {
    let savedGameData =
      localStorage.getItem("GameData-matchTheCardPair") || "{}";

    savedGameData = JSON.parse(savedGameData);

    if (_.isEmpty(savedGameData) || savedGameData.gameNotYetInitialized) {
      setGameData(generateGameDataForStage(1));
    } else {
      setGameData(savedGameData);
    }
  };

  useEffect(() => {
    getStars();
  }, [gameData.moves]);

  useEffect(() => {
    if (gameData.gameNotYetInitialized) {
      startTheGame();
    }
  }, [gameData.gameNotYetInitialized]);

  useEffect(() => {
    saveTheGameData();
  }, [gameData]);

  useEffect(() => {
    if (gameData.stage >= 1) {
      let allValueFront = __.where(gameData.cards, { isMatched: true });

      if (gameData.cards.length === allValueFront.length) {
        gameData.stage += 1;
        getStars();
        setGameData(generateGameDataForStage(gameData.stage));
        saveTheGameData();
      }
    }
  }, [gameData, gameData.moves]);

  useEffect(() => {
    let startTime = new Date().getTime();
    setInterval(() => {
      let currentTime = new Date().getTime();
      let differenceTime = Math.floor((currentTime - startTime) / 1000);
      let minutes = Math.floor(differenceTime / 60);
      let seconds = Math.floor(differenceTime % 60);
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      setTime(`${minutes} : ${seconds}`);
    }, 750);
  }, []);

  const handleGameRest = () => {
    localStorage.removeItem("GameData-matchTheCardPair");
    window.location.reload(false);
  };
  const saveTheGameData = () => {
    localStorage.setItem("GameData-matchTheCardPair", JSON.stringify(gameData));
  };

  const getStars = () => {
    let triple = gameData.stage * 3;
    if (gameData.moves <= triple) {
      gameData.stars = 5;
    } else if (
      gameData.moves > triple &&
      gameData.moves <= triple + gameData.stage
    ) {
      gameData.stars = 4;
    } else if (
      gameData.moves <= triple + 2 * gameData.stage &&
      gameData.moves > triple + gameData.stage
    ) {
      gameData.stars = 3;
    } else if (
      gameData.moves > triple + 2 * gameData.stage &&
      gameData.moves <= triple + 3 * gameData.stage
    ) {
      gameData.stars = 2;
    } else {
      gameData.stars = 1;
    }
    setGameData({ ...gameData });
  };

  const flipThisCard = (cardId) => {
    let card = _.find(gameData.cards, { id: cardId });
    if (card.isMatched === true) {
      return;
    }
    if (card.face === "FRONT" && card.isMatched === false) {
      card.isOpened = false;
      card.face = "BACK";
      gameData.openedElement = 0;
      gameData.moves += 1;
      setGameData({ ...gameData });
      return;
    }

    if (card.face === "BACK") {
      if (gameData.openedElement === 0) {
        gameData.openedElement = card;
        gameData.openedElement.isOpened = true;
        gameData.openedElement.face = "FRONT";
      } else {
        gameData.clickedElement = card;
        gameData.clickedElement.isOpened = true;
        gameData.clickedElement.face = "FRONT";
        if (
          gameData.openedElement.secretValue ===
          gameData.clickedElement.secretValue
        ) {
          setTimeout(() => {
            gameData.openedElement = _.find(gameData.cards, {
              id: gameData.openedElement.id,
            });
            gameData.clickedElement.isMatched = true;
            gameData.openedElement.isMatched = true;
            gameData.openedElement = 0;
            gameData.clickedElement = 0;
            setGameData({ ...gameData });
          }, 500);
        } else {
          setTimeout(() => {
            gameData.openedElement = _.find(gameData.cards, {
              id: gameData.openedElement.id,
            });
            gameData.openedElement.face = "BACK";
            gameData.clickedElement.face = "BACK";
            gameData.openedElement.isOpened = false;
            gameData.clickedElement.isOpened = false;
            gameData.openedElement = 0;
            gameData.clickedElement = 0;
            setGameData({ ...gameData });
          }, 500);
        }
      }
    }
    gameData.moves += 1;
    setGameData({ ...gameData });
  };

  return (
    <MatchTheCardPairComponent
      saveTheGameData={saveTheGameData}
      gameData={gameData}
      time={time}
      flipThisCard={flipThisCard}
      openRefreshGameModal={openRefreshGameModal}
      setOpenRefreshGameModal={setOpenRefreshGameModal}
      handleGameRest={handleGameRest}
    />
  );
};
function generateGameDataForStage(stage) {
  let gameDataForStage = {
    stage: stage,
    cards: [],
    // time: "00:00",
    moves: 0,
    openedElement: 0,
    clickedElement: 0,
    stars: 5,
  };
  let secretValues = _.shuffle(
    _.range(1, stage + 1).concat(_.range(1, stage + 1))
  );

  gameDataForStage.cards = secretValues.map((secretValue) => {
    return {
      secretValue: secretValue,
      face: "BACK",
      id: nanoid(),
      isMatched: false,
      isOpened: false,
    };
  });

  return gameDataForStage;
}
export default MatchTheCardPair;
