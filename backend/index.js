//import packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utils
import connectDB from "./config/db.js";

//.env configuration
dotenv.config();

//decleare post
const port = process.env.PORT || 5000;

//calling databse
connectDB();

//creating express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//get request
app.get("/", (req, res) => {
  res.send("Hello world");
});

//listen to a prot
app.listen(port, () => {
  console.log(`Ther server is running on port: ${port}`);
});
