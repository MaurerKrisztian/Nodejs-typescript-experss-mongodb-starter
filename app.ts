import mongoose from 'mongoose'
import express from "express";
import bodyParser from "body-parser";
import {default as routers} from './routers/test.router';


require('dotenv/config')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routers);

const PORT = 3000;
const URI = process.env.DB_URI;

if (URI === undefined) {
    throw new Error('DB URI is undefined.')
}

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("connected to DB")
});


app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
