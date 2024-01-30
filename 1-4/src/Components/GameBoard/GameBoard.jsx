import React from "react";
import "./GameBoard.css";

/**
 * GameBoard component for displaying and interacting with the game board.
 *
 * @param {function} onSelectSquare - function to handle square selection
 * @param {array} turns - array of turns taken in the game
 * @return {JSX.Element} JSX element representing the game board
 */
const GameBoard = ({ onSelectSquare, board }) => {
  // Render the game board with the updated state
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((psymbol, colIndex) => (
              <li key={colIndex}>
                {/* Render a button for each square on the game board */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={psymbol !== null}
                >
                  {psymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
