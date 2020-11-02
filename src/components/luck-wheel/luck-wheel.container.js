import { useState, useEffect } from "react";
import LuckWheelComponent from "./luck-wheel.component";

const LuckWheel = () => {
  const [isWheelSpining, setIsWheelSpining] = useState(false);
  const [offers, setOffers] = useState([]);
  const [randomDegree, setRandomDegree] = useState(0);

  const origOffers = [
    { firstOffer: "100% off", secondOffer: "Guranteed" },
    { firstOffer: "Buy $1 shirt", secondOffer: "Get flat $1000 off" },
    { firstOffer: "Buy 1 iphone", secondOffer: "Die alone and poor" },
    { firstOffer: "Buy 1 saree", secondOffer: "Get maa ka pyar" },
    { firstOffer: "$5K", secondOffer: "100% Guranteed" },
    { firstOffer: "1 Tesla", secondOffer: "In your dreams" },
  ];

  const amazOffers = [
    { firstOffer: "Ghanta", secondOffer: "Milega" },
    { firstOffer: "Ghanta", secondOffer: "Milega" },
    { firstOffer: "Ghanta", secondOffer: "Milega" },
    { firstOffer: "Ghanta", secondOffer: "Milega" },
    { firstOffer: "Ghanta", secondOffer: "Milega" },
    { firstOffer: "Ghanta", secondOffer: "Milega" },
  ];

  useEffect(() => {
    setOffers(origOffers);
  }, []);

  useEffect(() => {
    if (isWheelSpining) {
      let degree = 2000 + Math.random() * 8000;
      setRandomDegree(degree);
    }
  }, [isWheelSpining]);

  const changeWheelRotation = (spinning) => {
    setRandomDegree(0);
    setOffers(origOffers);

    setTimeout(() => {
      setIsWheelSpining(spinning); //First stop
      setTimeout(function () {
        setOffers(amazOffers);
      }, 1000);
      spinning &&
        setTimeout(() => {
          setIsWheelSpining(false);
        }, 5000); //Then start
    }, 0);
  };

  const getRandomDegree = () => {};
  return (
    <LuckWheelComponent
      isWheelSpining={isWheelSpining}
      // setIsWheelSpining={setIsWheelSpining}
      offers={offers}
      changeWheelRotation={changeWheelRotation}
      randomDegree={randomDegree}
    />
  );
};

export default LuckWheel;
