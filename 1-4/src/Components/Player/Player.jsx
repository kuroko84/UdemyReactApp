import React from "react";

import "./Player.css";

/**
 * Creates a player component with the given name and symbol.
 *
 * @param {Object} props - the props object containing the name, symbol, and isActive
 * @param {string} props.name - the name of the player
 * @param {string} props.symbol - the symbol of the player
 * @param {boolean} props.isActive - whether the player is active or not
 * @return {JSX.Element} a React component representing the player
 */
const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = React.useState(name);
  const [isEditing, setEditing] = React.useState(false);

  // Handles the click event and toggles the editing state.
  function handleClick() {
    setEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  /**
   * Handles the change event and updates the player's name.
   *
   * @param {event} event - the event object
   * @return {void}
   */
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
