import React from "react";

export default function Player() {
  const input = React.useRef();
  const [playerName, setPlayerName] = React.useState(null);

  function handleClickBtn() {
    setPlayerName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Player"}</h2>
      <p>
        <input type="text" ref={input} />
        <button onClick={handleClickBtn}>Set Name</button>
      </p>
    </section>
  );
}
