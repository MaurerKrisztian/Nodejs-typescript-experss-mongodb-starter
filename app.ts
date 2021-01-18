import mongoose from  'mongoose'
import express from "express";
import bodyParser from "body-parser";


require('dotenv/config')
const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const URI = process.env.DB_URI;

if (URI === undefined) {
    throw new Error('DB URI is undefined.')
}

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("connected to DB")
});


app.get('/', (req: any, res: any) => {
    res.send('Test route.')
})


app.listen(PORT, ()=>{
    console.log("App listening on port " + PORT);
});
