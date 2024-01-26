import React from "react";

import "./Player.css";

/**
 * Creates a player component with the given name and symbol.
 *
 * @param {Object} name - the name of the player
 * @param {string} symbol - the symbol of the player
 * @return {JSX.Element} a React component representing the player
 */
const Player = ({ name, symbol }) => {
  const [playerName, setPlayerName] = React.useState(name);
  const [isEditing, setEditing] = React.useState(false);
  function handleClick() {
    setEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let PlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    PlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
