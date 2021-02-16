import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"

// call environment variables
dotenv.config()

// connect to MongoDB database
connectDB()

// initialize express
const app = express()

// routes
app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)

// server port
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
