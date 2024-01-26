import React from "react";
import "./GameBoard.css";

const initialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = React.useState(initialBoardGame);
  function handleSelectButton(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((psymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectButton(rowIndex, colIndex)}>
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
