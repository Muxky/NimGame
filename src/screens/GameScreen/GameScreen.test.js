import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GameScreen from "./GameScreen";

test("GameScreen renders the GameSurface component correctly", () => {
  render(<GameScreen />);

  expect(screen.getByTestId("game-surface")).toBeInTheDocument();
});
