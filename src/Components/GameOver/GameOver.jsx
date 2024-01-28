import React from "react";
import "./GameOver.css";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h1>Game Over !</h1>
      <p>{winner && <p>Winner: {winner}</p>}</p>
      <p>{!winner && <p>Draw</p>}</p>
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
