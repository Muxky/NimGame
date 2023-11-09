import React from "react";
import GameControls from "../GameControls/GameControls";
import useGameLogic from "../GameLogic/useGameLogic";
import Matches from "./Matches/Matches";
import "../../styles/globalStyles.css";
import { Move } from "../../types";

//Combines game logic and game controls
const GameSurface = () => {
  const startNumberMatches = 13;
  const beginningPlayer = 1;
  const initialMovesState: Move[] = [];
  const initialDifficulty= 1;

  const {
    matches,
    player,
    winner,
    difficulty,
    handleRemoveMatches,
    resetGame,
    getPlayerName,
    handleDifficultyChange,
  } = useGameLogic(
    startNumberMatches,
    beginningPlayer,
    initialMovesState,
    initialDifficulty
  );

  return (
    <div className="screen-container" data-testid="game-surface">
      <h1
        className="page-title"
        style={{ color: difficulty === 2 ? "#b34947" : "" }}
      >
        Impartial Game
      </h1>
      <Matches
        matches={matches}
        maxMatches={13}
        data-testid="matches-component"
      />
      <h3 className="page-text">Übrige Streichhölzer {matches}</h3>
      <div className="page-text">
        {winner ? (
          <h3>Gewinner: {getPlayerName(winner)}</h3>
        ) : (
          <h3>Spieler am Zug: {getPlayerName(player)}</h3>
        )}
      </div>
      <GameControls
        player={player}
        matches={matches}
        handleRemoveMatches={handleRemoveMatches}
        winner={winner}
        resetGame={resetGame}
        handleDifficultyChange={handleDifficultyChange}
      />
    </div>
  );
};

export default GameSurface;
