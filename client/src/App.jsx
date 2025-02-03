//import react from "react";
import {useState} from "react"; //

function App(){
  function arr(){
    const board = [] //2d array
    for(let i = 0 ; i < 8; i++){
      board[i] = []
      for(let j =0 ; j < 8 ;j++){
        //board[i][j] = "0" ;
        board[i][j] = {
          color : (i+j) %2 === 0 ? "W" : "B",
          piece : null ,
          
        }


      }

    }

    for(let j = 0 ; j<8 ; j++){
      board[1][j].piece = "pawn" ;
      board[6][j].piece = "pawn" ;
    }

    for(let j = 0 ; j <8 ;j++){
      const stuff = ["elephant","horse","Minster" ,"King","Queen","elephant","horse","Minster"]
      board[0][j].piece = stuff[j];
      board[7][j].piece = stuff[j];
    }

    
    

    

    return board
  }

  

  const[board,setBoard]= useState(arr());
  const[selected,setSelected]=useState(null);

  

    

    //click
    function handleClick(row,col){
      if(selected){
        move(row,col);

      }else{
        setSelected({row,col});//{}

      }

    }

    function move(newRow , newCol){
      if(!selected) return;

      const newboard = [...board];//copied board
      newboard[newRow][newCol].piece = newboard[selected.row][selected.col].piece;
      newboard[selected.row][selected.col].piece = null;

      setBoard(newboard);
      setSelected(null);


    }





  
  const print = arr();
  console.log(print);
  return(
    <>
    <h1>Chess</h1>
    {print.map((row,rowIndex) => (
      <div key={rowIndex} style={{display: "flex"}}>
        {row.map((cell,colIndex) => (
          <span key={`${rowIndex}-${colIndex}`}
          onClick={() => handleClick(rowIndex, colIndex)}
          style = {{
            width : "70px",
            height : "50px",
            backgroundColor: cell.color === "W" ? "white" : "gray",
            border: "1px solid red",
            border:
                  selected?.row === rowIndex && selected?.col === colIndex
                    ? "2px solid pink" // 
                    : "1px solid red",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",

            
          }} 

          
          >
            
            {cell.piece || ""}


          </span>
          

        
        ))}

      </div>
    ))}
    
    </>
    
    
  
  )
}

export default App;

