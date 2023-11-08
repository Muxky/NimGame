import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Matches from "./Matches";

test("Matches renders the correct number of MatchSVG and BurningMatchSVG.", () => {
  render(<Matches matches={5} maxMatches={10} />);

  const matchSVGs = screen.getAllByRole("img");
  expect(matchSVGs).toHaveLength(10);

  for (let i = 0; i < 5; i++) {
    expect(matchSVGs[i]).toHaveAttribute("data-icon", "match-svg");
  }
  for (let i = 5; i < 10; i++) {
    expect(matchSVGs[i]).toHaveAttribute("data-icon", "burning-match-svg");
  }
});
