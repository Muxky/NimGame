import React from "react";
import "./RemoveMatchButtons.css";

//Provides the buttons for drawing matches of different numbers
const RemoveMatchButtons = ({
  winner,
  matches,
  player,
  handleRemoveMatches,
}) => {
  return (
    <div className="game-contol-buttons" data-testid="remove-match-buttons">
      {!winner && (
        <>
          <button
            onClick={() => handleRemoveMatches(1)}
            disabled={player === 2 || matches < 1}
          >
            Ziehe 1
          </button>
          <button
            onClick={() => handleRemoveMatches(2)}
            disabled={player === 2 || matches < 2}
          >
            Ziehe 2
          </button>
          <button
            onClick={() => handleRemoveMatches(3)}
            disabled={player === 2 || matches < 3}
          >
            Ziehe 3
          </button>
        </>
      )}
    </div>
  );
};

export default RemoveMatchButtons;
