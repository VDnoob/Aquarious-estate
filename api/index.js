import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser)

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connection established successfully!!")
  })
  .catch((err) => {
    console.error("Error in connection : " + err)
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
