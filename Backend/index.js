import "express-async-errors";
import 'dotenv/config';

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./Routes/routes.js"
import errorHandler from "./handler/errorHandler.js"

const port = 8080;
const app = express();

app.use(cors({
  origin: process.env.frontend_url,
  methods: ['GET', 'POST'],
  credentials:true,
  allowedHeaders: "Content-Type,Authorization",
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// DataBase 
const dbLink = process.env.mongo_Atlas;
async function main() {
  await mongoose.connect(dbLink, {
    serverSelectionTimeoutMS: 30000, // 30 seconds
  });
};

main()
.then(()=>console.log("Connect to Database"))
.catch(err => console.log(err));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

// Routes
app.use("/feedback",router);

// middleware
app.use(errorHandler);

app.listen(port,()=>{
    console.log("Sever Start")
})
