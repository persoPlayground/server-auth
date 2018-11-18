const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:auth/auth';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true } );

const app = express();
const server = http.createServer(app);

app.use(morgan('combined'));
app.use(bodyParser.json());
router(app);



server.listen(port);
console.log(`authserver on ${port}`);