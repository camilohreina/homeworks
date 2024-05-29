
const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use( bodyParser.json({ limit: '250mb' }) )

app.use('/api/auth', require('./routes/auth'));

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});