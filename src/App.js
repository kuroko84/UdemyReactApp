import logo from "./Assets/logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import TabButton from "./Components/TabButton/TabButton";

function App() {
  function handleSelect() {
    console.log("Hello clicked");
  }
  return (
    <div className="App">
      <Header logo={logo} />
      <section>
        <h2>Example</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>States</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
