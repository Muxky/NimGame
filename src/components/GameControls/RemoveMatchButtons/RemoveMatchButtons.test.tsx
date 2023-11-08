import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RemoveMatchButtons from "./RemoveMatchButtons";

test("Buttons are rendered correctly", () => {
  render(
    <RemoveMatchButtons
      winner={null}
      matches={5}
      player={1}
      handleRemoveMatches={() => {}}
    />
  );

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(3);
  expect(buttons[0]).toHaveTextContent("Ziehe 1");
  expect(buttons[0]).not.toBeDisabled();
  expect(buttons[1]).toHaveTextContent("Ziehe 2");
  expect(buttons[1]).not.toBeDisabled();
  expect(buttons[2]).toHaveTextContent("Ziehe 3");
  expect(buttons[2]).not.toBeDisabled();
});

test("Buttons are disabled when the player is 2", () => {
  render(
    <RemoveMatchButtons
      winner={null}
      matches={5}
      player={2}
      handleRemoveMatches={() => {}}
    />
  );

  const buttons = screen.getAllByRole("button");
  expect(buttons[0]).toBeDisabled();
  expect(buttons[1]).toBeDisabled();
  expect(buttons[2]).toBeDisabled();
});

test("Buttons are disabled when no matches are left", () => {
  render(
    <RemoveMatchButtons
      winner={null}
      matches={0}
      player={1}
      handleRemoveMatches={() => {}}
    />
  );

  const buttons = screen.getAllByRole("button");
  expect(buttons[0]).toBeDisabled();
  expect(buttons[1]).toBeDisabled();
  expect(buttons[2]).toBeDisabled();
});

test("Correct function is called when clicked", () => {
  const handleRemoveMatchesMock = jest.fn();

  render(
    <RemoveMatchButtons
      winner={null}
      matches={5}
      player={1}
      handleRemoveMatches={handleRemoveMatchesMock}
    />
  );

  fireEvent.click(screen.getByText("Ziehe 1"));

  expect(handleRemoveMatchesMock).toHaveBeenCalledWith(1);
});
