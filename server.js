const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDataBase = require('./db/connection');
const queryRoute = require('./routes/query');
const recentRoute = require('./routes/recent');

const PORT = process.env.PORT;

const app = express();

// db connection
connectDataBase();

app.use(cors());
app.use(express.json());

// static home page
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

// routes
app.use('/query', queryRoute);
app.use('/recent', recentRoute);

// page not found middleware
app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));