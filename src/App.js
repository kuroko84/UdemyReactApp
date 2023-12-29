import logo from "./Assets/logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Example from "./Components/Example/Example.jsx";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Example />
    </div>
  );
}

export default App;
