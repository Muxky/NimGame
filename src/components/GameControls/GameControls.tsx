import React from "react";
import RemoveMatchButtons from "./RemoveMatchButtons/RemoveMatchButtons";
import SelectDifficultyDropdown from "./SelectDifficultyDropdown/SelectDifficultyDropdown";
import "./GameControls.css";

//Brings together all the necessary components for the controls of the game
const GameControls = ({
  player,
  matches,
  handleRemoveMatches,
  winner,
  resetGame,
  handleDifficultyChange,
}) => {
  return (
    <div className="game-control-container">
      <RemoveMatchButtons
        winner={winner}
        matches={matches}
        player={player}
        handleRemoveMatches={handleRemoveMatches}
      />
      <SelectDifficultyDropdown
        handleDifficultyChange={handleDifficultyChange}
      />
      <div className="game-reset-button-container">
        <button className="reset-game-button" onClick={() => resetGame()}>
          Neustart
        </button>
      </div>
    </div>
  );
};

export default GameControls;
