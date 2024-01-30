import React from "react";

// import logo from "./Assets/logo.svg";
import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import Player from "./Components/Player/Player";
import Log from "./Components/Log/Log";
import { WINNING_COMBINATIONS } from "./Assets/winning_combinations";
import GameOver from "./Components/GameOver/GameOver";
// import Header from "./Components/Header/Header";
// import Example from "./Components/Example/Example.jsx";

const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // return (
  //   <div className="App">
  //     <Header logo={logo} />
  //     <Example />
  //   </div>
  // );
  //const [activePlayer, setActivePlayer] = React.useState("X");
  const [gameTurns, setGameTurns] = React.useState([]);
  //const [hasWinner, setHasWinner] = React.useState(false);
  const [players, setPlayer] = React.useState({ X: "Player 1", O: "Player 2" });

  const activePlayer = deriveActivePlayer(gameTurns);

  // Initialize the game board with the initial state
  let gameBoard = [...initialBoardGame.map((row) => [...row])];
  // Iterate through each turn and update the game board
  for (const turn of gameTurns) {
    const { square, player } = turn;
    // Update the game board based on the current turn
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combinations of WINNING_COMBINATIONS) {
    const fSquare = gameBoard[combinations[0].row][combinations[0].column];
    const sSquare = gameBoard[combinations[1].row][combinations[1].column];
    const tSquare = gameBoard[combinations[2].row][combinations[2].column];
    if (fSquare && fSquare === sSquare && fSquare === tSquare) {
      winner = players[fSquare];
    }
  }
  function handleRestart() {
    setGameTurns([]);
    //setActivePlayer("X");
  }
  /**
   * Function to handle the select button.
   *
   * @param {void}
   * @return {void}
   */
  function handleSelectButton(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayer((prevPlayer) => ({ ...prevPlayer, [symbol]: newName }));
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            symbol="X"
            name="Player 1"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          <Player
            symbol="O"
            name="Player 2"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard
          onSelectSquare={handleSelectButton}
          board={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
