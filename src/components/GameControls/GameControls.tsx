import React from "react";
import RemoveMatchButtons from "./RemoveMatchButtons/RemoveMatchButtons";
import SelectDifficultyDropdown from "./SelectDifficultyDropdown/SelectDifficultyDropdown";
import "./GameControls.css";
import { HandleDifficultyFn, Player, RemoveMatchesFn } from "../../types";

type GameControlProps = {
  player: Player ;
  matches: number;
  handleRemoveMatches: RemoveMatchesFn;
  winner: null | Player;
  resetGame: () => void;
  onDifficultyChange: HandleDifficultyFn;
}

//Brings together all the necessary components for the controls of the game
const GameControls = ({
  player,
  matches,
  handleRemoveMatches,
  winner,
  resetGame,
  onDifficultyChange,
}: GameControlProps) => {
  return (
    <div className="game-control-container">
      <RemoveMatchButtons
        winner={winner}
        matches={matches}
        player={player}
        handleRemoveMatches={handleRemoveMatches}
      />
      <SelectDifficultyDropdown
        onDifficultyChange={onDifficultyChange}
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
