
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("My name is Wisal. I am learning React and Express.");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        { id: 1, joke: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 2, joke: "Why did the developer go broke? Because he used up all his cache!" },
        { id: 3, joke: "Why do JavaScript developers wear glasses? Because they don't C#!" }
    ];

    res.json(jokes);
});

const PORT = process.env.PORT || 3000;


app.listen(3000, "0.0.0.0", () => {
  console.log("Backend running on port 3000");
});
