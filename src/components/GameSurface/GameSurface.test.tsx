import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GameSurface from "./GameSurface";

test("GameSurface renders all subcomponents correctly", () => {
  render(<GameSurface />);

  expect(screen.getByText("Impartial Game")).toBeInTheDocument();
  expect(screen.getByTestId("matches-component")).toBeInTheDocument();
  expect(screen.getByText("Übrige Streichhölzer 13")).toBeInTheDocument();
  expect(screen.getByText("Spieler am Zug: Player 1")).toBeInTheDocument();
  expect(screen.getByText("Leicht")).toBeInTheDocument();
  expect(screen.getByText("Neustart")).toBeInTheDocument();
});
