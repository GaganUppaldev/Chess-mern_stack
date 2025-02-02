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
  const print = arr();
  console.log(print);
  return(
    <>
    <h1>Chess</h1>
    {print.map((row,rowindex) => (
      <div key={rowindex} style={{display: "flex"}}>
        {row.map((cell,celindex) => (
          <span key={`${rowindex}-${celindex}`}
          style = {{
            width : "70px",
            height : "50px",
            backgroundColor: cell.color === "W" ? "white" : "gray",
            border: "1px solid red",
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

