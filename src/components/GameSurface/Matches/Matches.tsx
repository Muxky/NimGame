import React from "react";
import { ReactComponent as MatchSVG } from "../../../assets/GameMatch.svg";
import { ReactComponent as BurningMatchSVG } from "../../../assets/GameMatchBurning.svg";
import "./Matches.css";

type MatchesProps = {
  matches: number,
  maxMatches: number
}

//Representation of the matches
const Matches = ({ matches, maxMatches }: MatchesProps) => {
  return (
    <div className="game-matches-row" data-testid="matches-component">
      {Array(maxMatches)
        .fill(null)
        .map((_, index) => {
          return index < matches ? (
            <MatchSVG
              key={index}
              width="6vw"
              height="20vh"
              role="img"
              data-icon="match-svg"
            />
          ) : (
            <BurningMatchSVG
              key={index}
              width="6vw"
              height="20vh"
              role="img"
              data-icon="burning-match-svg"
            />
          );
        })}
    </div>
  );
};

export default Matches;
