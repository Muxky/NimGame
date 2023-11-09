import React from "react";
import { ReactComponent as NimGameBG } from "../../assets/NimSpielBackground.svg";
import "./LandingScreen.css";
import "../../styles/globalStyles.css";
import { voidFunction } from "../../types";

type LandingScreenProps = {
  scrollToGame: voidFunction;
  scrollToTutorial: voidFunction;
}

//Represents the entire landing screen
const LandingScreen = ({ scrollToGame, scrollToTutorial }: LandingScreenProps) => {
  return (
    <div className="screen-container">
      <NimGameBG className="landing-screen-background" />
      <div className="landing-screen-content-container">
        <h1 className="landing-screen-title">NIM-SPIEL</h1>
        <div className="landing-screen-button-container">
          <button onClick={scrollToGame}>Spiel starten!</button>
          <button onClick={scrollToTutorial}>Wie funktioniert das ?</button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
