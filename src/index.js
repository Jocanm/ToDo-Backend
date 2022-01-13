import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my todo app</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log("Server listening on port " + process.env.PORT);
})