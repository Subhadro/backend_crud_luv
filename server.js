const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
const todoRoutes = require('./routes/todos');
app.use('/api/v1', todoRoutes);

const dbconnect = require('./config/database');
dbconnect();
app.get('/', (req, res) => {
    res.send(`<h1>this is homepage</h1>`)
})
app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
})