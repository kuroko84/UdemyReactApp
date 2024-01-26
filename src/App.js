import React from "react";

// import logo from "./Assets/logo.svg";
import "./App.css";
import GameBoard from "./Components/GameBoard/GameBoard";
import Player from "./Components/Player/Player";
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

  function handleSelectButton() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
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
          activePlayerSymbol={activePlayer}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
