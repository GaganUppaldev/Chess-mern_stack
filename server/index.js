const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Chess server is active");
});

app.post("/move", (req, res) => {
    const piece = req.body.piece; // Get 'piece' from the request body

    if (piece === "pawn") {
        console.log("Pawn got clicked");
    }

    res.send({ message: "Move received", piece });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
