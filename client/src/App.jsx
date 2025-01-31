function App() {
    function arr() {
        const row = 8;
        const col = 8;
        const board = []; // 2D Array

        for (let i = 0; i < row; i++) {
            board[i] = [];
            for (let z = 0; z < col; z++) {
                board[i][z] = "c"; // 2D array board
            }
        }

        console.log(board);
        return board;
    }

    const chessboard = arr();

    return (
        <>
            <h1>Chess</h1>
            {chessboard.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <span
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                display: 'inline-block',
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'lightgray',
                                border: '1px solid black',
                                textAlign: 'center',
                                lineHeight: '50px',
                                marginRight: '5px'
                            }}
                        >
                            {cell}
                        </span>
                    ))}
                    <br />
                </div>
            ))}
        </>
    );
}

export default App;





