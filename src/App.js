// import logo from "./Assets/logo.svg";
import "./App.css";
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
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X" name="Player 1"></Player>
          <Player symbol="O" name="Player 2"></Player>
        </ol>
      </div>
    </main>
  );
}

export default App;
