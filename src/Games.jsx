import React, { useState, useEffect } from "react";

const Games = () => {
  return (
    <div className="games-page">
      <h1 className="pageTitleWhite">&lt; games &gt;</h1>
      <div className="games-container">
        <TicTacToe />
        <NumberGuessingGame />
        <PokemonRPS />
      </div>
    </div>
  );
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    console.log(`Player Move: ${index}`);

    const updatedBoard = [...newBoard];
    setTimeout(() => aiMove(updatedBoard), 200);
  };

  const aiMove = (currentBoard) => {
    if (calculateWinner(currentBoard) || !currentBoard.includes(null)) return;

    const bestMove = findBestMove(currentBoard);
    if (bestMove !== -1) {
      currentBoard[bestMove] = "O";
      setBoard(currentBoard);
      console.log(`AI's Move: ${bestMove}`);
    }
  };

  const findBestMove = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) return i;
    }
    return -1;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : board.includes(null)
    ? "Your move"
    : "Draw";

  return (
    <div className="game tic-tac-toe">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <p>{status}</p>
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
          console.log("Game Reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

const NumberGuessingGame = () => {
  const [targetNumber] = useState(() => Math.ceil(Math.random() * 100));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(`Target Number: ${targetNumber}`);
  }, [targetNumber]);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    let currentMessage;

    if (numGuess < targetNumber) {
      currentMessage = "Too low!";
    } else if (numGuess > targetNumber) {
      currentMessage = "Too high!";
    } else {
      currentMessage = "You guessed the number!";
    }
    setMessage(currentMessage);
    console.log("Guess:", numGuess, "Message:", currentMessage);
  };

  return (
    <div className="game number-guessing">
      <h2>Number Guessing Game</h2>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

const PokemonRPS = () => {
  const [result, setResult] = useState("");

  const playGame = (playerChoice) => {
    const types = ["fire", "water", "grass"];
    const aiChoice = types[Math.floor(Math.random() * types.length)];
    const typeAdvantages = {
      fire: "grass",
      grass: "water",
      water: "fire",
    };

    let resultMessage = `You chose ${playerChoice}, and the AI chose ${aiChoice}.`;

    if (playerChoice === aiChoice) {
      resultMessage += " It's a draw!";
    } else if (typeAdvantages[playerChoice] === aiChoice) {
      resultMessage += " You win!";
    } else {
      resultMessage += " You lose.";
    }

    setResult(resultMessage);
    console.log("Player Choice:", playerChoice, "AI Choice:", aiChoice, resultMessage);
  };

  return (
    <div className="game pokemon-rps">
      <h2>Pokémon Rock-Paper-Scissors</h2>
      <p>Select your Pokémon type:</p>
      <div className="choices">
        <button onClick={() => playGame("fire")}>Fire</button>
        <button onClick={() => playGame("water")}>Water</button>
        <button onClick={() => playGame("grass")}>Grass</button>
      </div>
      <p className="result">{result}</p>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Games;
