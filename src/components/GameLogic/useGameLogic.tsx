import { useState, useEffect } from "react";
import { Difficulty, Move, Player } from "../../types";

const useGameLogic = (
  startNumberMatches: number,
  beginningPlayer: Player,
  initialMovesState: Move[],
  initialDifficulty: Difficulty
) => {
  const [matches, setMatches] = useState(startNumberMatches);
  const [player, setPlayer] = useState(beginningPlayer);
  const [winner, setWinner] = useState<null | Player>(null);
  const [moves, setMoves] = useState(initialMovesState);
  const [difficulty, setDifficulty] = useState(initialDifficulty);

  //Function to change the difficulty of the computer move
  //1 === easy, 2 === hard
  const onDifficultyChange = () => {
    setDifficulty((prev) => (prev === "Easy" ? "Hard" : "Easy"));
  };

  //When changing the difficulty level restart the game
  useEffect(() => {
    resetGame();
  }, [difficulty]);

  //Function to execute the player move
  const handleRemoveMatches = (num: number) => {
    setMatches((prev) => prev - num);
    setPlayer((prev) => (prev === "Human" ? "Computer" : "Human"));
    setMoves((prevMoves) => [...prevMoves, { player: player, num }]);
  };

  //Function for difficulty hard, the computer makes a for-win move
  const findBestMove = (remainingMatches: number) => {
    if (remainingMatches === 4) {
      return 3;
    }

    if (remainingMatches <= 3 && remainingMatches !== 1) {
      return remainingMatches - 1;
    }

    const maxComputerMove = Math.min(3, remainingMatches);
    for (let numToDraw = maxComputerMove; numToDraw > 0; numToDraw--) {
      const remainingAfterMove = remainingMatches - numToDraw;
      if (remainingAfterMove % 4 === 0) {
        return numToDraw;
      }
    }
    return 1;
  };

  //Function to execute the computer move
  const computerMove = () => {
    let numToDraw: number;
    if (difficulty === "Easy") {
      numToDraw = Math.floor(Math.random() * Math.min(3, matches)) + 1;
    } else if (difficulty === "Hard") {
      numToDraw = findBestMove(matches);
    } else {
      throw new Error(`invalid difficulty ${difficulty}`)
    }
    const remainingMatches = matches - numToDraw;
    setMatches(remainingMatches);
    setPlayer("Human");
    setMoves((prevMoves) => [...prevMoves, { player: "Computer", num: numToDraw }]);
  };

  //Observation if the game is over and who has won
  //If the game is not finished and its the computers turn, the computer moves with a delay
  useEffect(() => {
    if (matches === 0) {
      setWinner(player === "Human" ? "Human" : "Computer");
    } else if (player === "Computer") {
      setTimeout(computerMove, 800);
    }
  }, [matches, player]);

  //Function to restart the game
  const resetGame = () => {
    setMatches(startNumberMatches);
    setPlayer(beginningPlayer);
    setWinner(null);
    setMoves(initialMovesState);
  };

  return {
    matches,
    player,
    winner,
    moves,
    difficulty,
    handleRemoveMatches,
    resetGame,
    onDifficultyChange,
  };
};

export default useGameLogic;
