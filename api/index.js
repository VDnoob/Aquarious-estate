import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'
import dotenv from "dotenv";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connection established successfully!!");
  })
  .catch((err) => {
    console.error("Error in connection : " + err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/user',userRouter)