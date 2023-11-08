import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TutorialScreen from "./TutorialScreen";

test("should render tutorial page with correctly", () => {
  render(<TutorialScreen />);

  expect(screen.getByText("Anleitung")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Auf zum Spiel!" })
  ).toBeInTheDocument();
});

test("should call scrollToGame when go to game button is clicked", () => {
  const mockScrollToGame = jest.fn();

  render(<TutorialScreen scrollToGame={mockScrollToGame} />);

  const goToGame = screen.getByRole("button", {
    name: "Auf zum Spiel!",
  });

  fireEvent.click(goToGame);

  expect(mockScrollToGame).toHaveBeenCalled();
});
