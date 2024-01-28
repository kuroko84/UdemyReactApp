import React from "react";

// import logo from "./Assets/logo.svg";
import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import Player from "./Components/Player/Player";
import Log from "./Components/Log/Log";
// import Header from "./Components/Header/Header";
// import Example from "./Components/Example/Example.jsx";

function App() {
  // return (
  //   <div className="App">
  //     <Header logo={logo} />
  //     <Example />
  //   </div>
  // );
  const [activePlayer, setActivePlayer] = React.useState("X");
  const [gameTurns, setGameTurns] = React.useState([]);
  /**
   * Handles the select button action by toggling the active player between "X" and "O".
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  /**
   * Function to handle the select button.
   *
   * @param {void}
   * @return {void}
   */
  function handleSelectButton(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer =
        prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X";
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            symbol="X"
            name="Player 1"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            symbol="O"
            name="Player 2"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard
          onSelectSquare={handleSelectButton}
          turns={gameTurns}
        ></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
