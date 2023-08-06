import { useState, useEffect } from "react";

const GameLogic = (
  startNumberMatches,
  beginningPlayer,
  initialMovesState,
  initialDifficulty
) => {
  const [matches, setMatches] = useState(startNumberMatches);
  const [player, setPlayer] = useState(beginningPlayer);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState(initialMovesState);
  const [difficulty, setDifficulty] = useState(initialDifficulty);

  //Function to change the difficulty of the computer move
  //1 === easy, 2 === hard
  const handleDifficultyChange = () => {
    setDifficulty((prev) => (prev === 1 ? 2 : 1));
  };

  //When changing the difficulty level restart the game
  useEffect(() => {
    resetGame();
  }, [difficulty]);

  //Function to execute the player move
  const handleRemoveMatches = (num) => {
    setMatches((prev) => prev - num);
    setPlayer((prev) => (prev === 1 ? 2 : 1));
    //setMoves((prevMoves) => [...prevMoves, { player: player, num }]);
  };

  //Function for difficulty hard, the computer makes a for-win move
  const findBestMove = (remainingMatches) => {
    if (remainingMatches === 4) {
      return 3;
    }

    //If there are 3 remaining Matches, remove 2
    //If there are 2 remaining Matches, remove 1
    if (remainingMatches <= 3 && remainingMatches !== 1) {
      return remainingMatches - 1;
    }

    //If there are more than 3 Matches, find the best move
    if (remainingMatches % 4 === 1) {
      return 3;
    }

    //If there is no winning-move, remove 1 Match
    return 1;
  };

  //Function to execute the computer move
  const computerMove = () => {
    let numToDraw;
    if (difficulty === 1) {
      numToDraw = Math.floor(Math.random() * Math.min(3, matches)) + 1;
    } else if (difficulty === 2) {
      numToDraw = findBestMove(matches);
    }
    const remainingMatches = matches - numToDraw;
    setMatches(remainingMatches);
    setPlayer(1);
    setMoves((prevMoves) => [...prevMoves, { player: 2, num: numToDraw }]);
  };

  //Observation if the game is over and who has won
  //If the game is not finished and its the computers turn, the computer moves with a delay
  useEffect(() => {
    if (matches === 0) {
      setWinner(player === 1 ? 1 : 2);
    } else if (player === 2) {
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

  //Function to set the Player/Computer Names
  const getPlayerName = (player) => {
    return player === 1 ? "Player 1" : "Computer";
  };

  return {
    matches,
    player,
    winner,
    moves,
    difficulty,
    handleRemoveMatches,
    resetGame,
    getPlayerName,
    handleDifficultyChange,
  };
};

export default GameLogic;
