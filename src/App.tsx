import { useRef } from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import TutorialScreen from "./screens/TutorialScreen/TutorialScreen";
import GameScreen from "./screens/GameScreen/GameScreen";

const App = () => {
  const gameRef = useRef(null);
  const tutorialRef = useRef(null);

  const scrollToGame = () => {
    gameRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTutorial = () => {
    tutorialRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <LandingScreen
        scrollToGame={scrollToGame}
        scrollToTutorial={scrollToTutorial}
      />
      <div ref={tutorialRef}>
        <TutorialScreen scrollToGame={scrollToGame} />
      </div>
      <div ref={gameRef}>
        <GameScreen />
      </div>
    </div>
  );
};

export default App;
