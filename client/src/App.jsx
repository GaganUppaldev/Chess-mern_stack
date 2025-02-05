import { useState } from "react";

function App() {
  function arr() {
    const board = []; // 2D array
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = {
          color: (i + j) % 2 === 0 ? "W" : "B",
          piece: null,
        };
      }
    }

    // Place pawns
    for (let j = 0; j < 8; j++) {
      board[1][j].piece = "pawn";
      board[6][j].piece = "pawn";
    }

    // Place other pieces
    const stuff = ["elephant", "horse", "minister", "King", "Queen", "elephant", "horse", "minister"];
    for (let j = 0; j < 8; j++) {
      board[0][j].piece = stuff[j];
      board[7][j].piece = stuff[j];
    }

    return board;
  }

  const [board, setBoard] = useState(arr());
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleClick = (row, col) => {
    // Copy the board state to avoid direct mutation
    const newBoard = [...board];

    if (!selectedPiece && newBoard[row][col].piece) {
      // Select the piece
      setSelectedPiece({ row, col, piece: newBoard[row][col].piece });
    } else if (selectedPiece) {
      // Move the piece to the new cell
      newBoard[selectedPiece.row][selectedPiece.col].piece = null;
      newBoard[row][col].piece = selectedPiece.piece;
      setSelectedPiece(null);
      setBoard(newBoard);
    }
  };

  return (
    <>
      <h1>Chess</h1>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, cellIndex) => (
            <span
              key={`${rowIndex}-${cellIndex}`}
              onClick={() => handleClick(rowIndex, cellIndex)}
              style={{
                width: "70px",
                height: "50px",
                backgroundColor: cell.color === "W" ? "white" : "gray",
                border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {cell.piece || ""}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
