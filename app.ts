const PORT = 3000;

const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv/config')


const URI = process.env.DB_URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to DB")
});


app.get('/', (req: any, res: any) => {
    res.send('Test route.')
})


app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
});