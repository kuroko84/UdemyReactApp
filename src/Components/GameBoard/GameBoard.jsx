import React from "react";
import "./GameBoard.css";

const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * GameBoard component for displaying and interacting with the game board.
 *
 * @param {function} onSelectSquare - function to handle square selection
 * @param {array} turns - array of turns taken in the game
 * @return {JSX.Element} JSX element representing the game board
 */
const GameBoard = ({ onSelectSquare, turns }) => {
  // Initialize the game board with the initial state
  let gameBoard = initialBoardGame;
  // Iterate through each turn and update the game board
  for (const turn of turns) {
    const { square, player } = turn;
    // Update the game board based on the current turn
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // Render the game board with the updated state
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((psymbol, colIndex) => (
              <li key={colIndex}>
                {/* Render a button for each square on the game board */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
