import React from "react";
import GameControls from "../GameControls/GameControls";
import GameLogic from "../GameLogic/GameLogic";
import Matches from "./Matches/Matches";
import "../../styles/globalStyles.css";

//Combines game logic and game controls
const GameSurface = () => {
  const startNumberMatches = 13;
  const beginningPlayer = 1;
  const initialMovesState = [];
  const initialDifficulty = 1;

  const {
    matches,
    player,
    winner,
    moves,
    difficulty,
    handleRemoveMatches,
    resetGame,
    getPlayerName,
    handleDifficultyChange,
  } = GameLogic(
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
        moves={moves}
        difficulty={difficulty}
        handleDifficultyChange={handleDifficultyChange}
      />
    </div>
  );
};

export default GameSurface;
