// import logo from "./Assets/logo.svg";
import "./App.css";
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
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App;
