const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/move", (req, res) => {
  const { piece, position, board } = req.body;
  const { row, col } = position;
  const validMoves = [];

  if (piece.startsWith("pawn")) {
    const isWhite = piece.endsWith("W");
    const direction = isWhite ? 1 : -1; // White moves down, Black moves up

    // Forward move (one step)
    if (board[row + direction] && !board[row + direction][col].piece) {
      validMoves.push({ row: row + direction, col });
    }

    // Forward move (two steps) from starting position
    const startingRow = isWhite ? 1 : 6;
    if (
      row === startingRow &&
      board[row + direction] &&
      !board[row + direction][col].piece &&
      board[row + 2 * direction] &&
      !board[row + 2 * direction][col].piece
    ) {
      validMoves.push({ row: row + 2 * direction, col });
    }

    // Diagonal attack
    [-1, 1].forEach((diagonal) => {
      if (
        board[row + direction] &&
        board[row + direction][col + diagonal] &&
        board[row + direction][col + diagonal].piece &&
        board[row + direction][col + diagonal].piece.endsWith(isWhite ? "B" : "W")
      ) {
        validMoves.push({ row: row + direction, col: col + diagonal });
      }
    });
  }

  if(piece.startsWith("rook")){
    if(piece.endsWith("W")){
      console.log("Rooked White clicked");
    }else if(piece.endsWith("B")){
      console.log("black rooked clicked");
    }

  //movement :
  const isWhite = piece.endsWith("W");
  const direction = isWhite ? 1:-1;

  //white means downward movement
  if(direction === 1){
    /*if(board[row + direction][col].piece = null){
      
    }*/
    for (let i = 0; i < 9; ) {
      if (board[row - i] && board[row - i][col] && board[row - i][col].piece === null) {
        // safe to access now
        i++;
      } else {
        console.log("row = " + (row - i) + " col = " + col);
        break;
      }
    }

    //for downward direction white rook logic 

    for (let i = 0; i < 9; ) {
      if (board[row + i] && board[row + i][col] && board[row + i][col].piece === null) {
        
        i++;
      } else {
        console.log("row = " + (row + i) + " col = " + col);
        break;
      }
    }
    
    //for right side durection white rook logic :
 
    for(let i = 0 ; i <9 ;){
      if(board[col+i] && board[row][col+i]  && board[row][col+i].piece === null){

        i++;

      }else{

        console.log("row = " + row  + " col = " + (col+i));
        break;

      }
    }

    //for left side 

    for(let i = 0 ;i <9 ; ){
      if(board[col-i] && board[row][col-i]  && board[row][col-i].piece === null){

        i++;

      }else{

        console.log("row = " + row + " col = " + (col-i));
        break;

      }
    }


   
  }

  }

  res.json({ validMoves });

  
});

app.listen(4000, () => console.log("Server running on port 4000"));
