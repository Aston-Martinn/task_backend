const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const foodRoutes = require('./routes/FoodRoutes');

const databaseConnection = require('./database/DatabaseConnection');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

app.use('/api', foodRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})