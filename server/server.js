// Importing required modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';
const routes = require("./routes/index");

// Defining port
const port = process.env.PORT || 9000;

// Defining app
const app = express();

// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Defining the Routes
routes(app);

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
