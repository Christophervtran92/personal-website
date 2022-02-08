
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const database = require('./database');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect(database.MONGO_URI);
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB Cluster0");
});
mongoose.connection.on('error', console.error.bind(console, 'Connection error: '));

const gameRouter = require('./routes/games');
app.use('/games', gameRouter);

app.get('/', (req, res) => {
    res.send("Welcome to Christopher Tran\'s Website");
});

app.listen(PORT, (req, res) => {
    console.log("Server is running on port: " + PORT);
});