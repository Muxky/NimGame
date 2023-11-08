import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SelectDifficultyDropdown from "./SelectDifficultyDropdown";

test("Dropdown displays difficulty options", () => {
  render(<SelectDifficultyDropdown />);

  expect(screen.getByTestId("difficulty-select")).toHaveTextContent(
    "Schwierigkeit:"
  );
  expect(screen.getByText("Leicht")).toBeInTheDocument();
  expect(screen.getByText("Schwer")).toBeInTheDocument();
});

test("Changes the difficulty level when selected", () => {
  const handleDifficultyChangeMock = jest.fn();

  render(
    <SelectDifficultyDropdown
      handleDifficultyChange={handleDifficultyChangeMock}
    />
  );

  fireEvent.change(screen.getByTestId("difficulty-select"), {
    target: { value: "2" },
  });

  expect(handleDifficultyChangeMock).toHaveBeenCalledWith("2");
});
