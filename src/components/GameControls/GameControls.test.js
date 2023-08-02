import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GameControls from "./GameControls";

test("GameControls renders all subcomponents correctly", () => {
  render(
    <GameControls
      player={1}
      matches={5}
      winner={null}
      handleRemoveMatches={() => {}}
      resetGame={() => {}}
      handleDifficultyChange={() => {}}
    />
  );

  expect(screen.getByTestId("remove-match-buttons")).toBeInTheDocument();
  expect(screen.getByTestId("select-difficulty-dropdown")).toBeInTheDocument();
  expect(screen.getByText("Neustart")).toBeInTheDocument();
});

test("Neustart Button calls resetGame function", () => {
  const resetGameMock = jest.fn();

  render(
    <GameControls
      player={1}
      matches={5}
      winner={null}
      handleRemoveMatches={() => {}}
      resetGame={resetGameMock}
      handleDifficultyChange={() => {}}
    />
  );

  fireEvent.click(screen.getByText("Neustart"));

  expect(resetGameMock).toHaveBeenCalled();
});
