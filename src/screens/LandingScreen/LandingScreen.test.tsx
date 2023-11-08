import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LandingScreen from "./LandingScreen";

describe("LandingScreen", () => {
  it("should render landing screen correctly", () => {
    const mockScrollToGame = jest.fn();
    const mockScrollToTutorial = jest.fn();

    render(
      <LandingScreen
        scrollToGame={mockScrollToGame}
        scrollToTutorial={mockScrollToTutorial}
      />
    );

    expect(screen.getByText("NIM-SPIEL")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Spiel starten!" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Wie funktioniert das ?" })
    ).toBeInTheDocument();
  });
});
