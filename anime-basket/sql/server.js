const cors = require('cors');
const express = require("express");


const app = express();
// Allows src app to communicate with sql server
// Only allows API requests from http://localhost:5173, which is the vite src app.
// Update corsOptions origin when deploying to production.
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

require("dotenv").config();
let dbConnect = require("./dbConnect");
// parse requests of content-type -
//application / json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my mySQL application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let animeRoutes = require('./routes/animeRoutes');
app.use('/api/anime', animeRoutes);

let libraryRoutes = require('./routes/libraryRoutes');
app.use('/api/library', libraryRoutes);

let blogRoutes = require('./routes/blogRoutes');
app.use('/api/blog', blogRoutes);

let commentRoutes = require('./routes/commentRoutes');
app.use('/api/comment', commentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});