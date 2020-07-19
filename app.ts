const PORT = 3000;

const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv/config')

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DBNAME = process.env.DB_NAME;
const URI = "mongodb+srv://"+USERNAME+":"+PASSWORD+"@cluster0.va3vb.mongodb.net/"+DBNAME+"?retryWrites=true&w=majority";
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to DB")
});


app.get('/', (req: any, res: any) => {
    res.send('We are on home')
})


app.listen(PORT, ()=>{
    console.log("app listening on port " + PORT);
});