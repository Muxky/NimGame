import React from "react";
import "./SelectDifficultyDropdown.css";

//Provides the dropdown for the selection of the difficulty level
const SelectDifficultyDropdown = ({ handleDifficultyChange }) => {
  return (
    <div
      className="game-dropdown-container"
      data-testid="select-difficulty-dropdown"
    >
      <label>
        <select
          className="game-dropdown"
          onChange={(e) => handleDifficultyChange(e.target.value)}
          data-testid="difficulty-select"
        >
          <option disabled className="difficulty-select">
            Schwierigkeit:
          </option>
          <option value="1">Leicht</option>
          <option value="2">Schwer</option>
        </select>
      </label>
    </div>
  );
};

export default SelectDifficultyDropdown;
