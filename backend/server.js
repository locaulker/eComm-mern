import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"

import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// call environment variables
dotenv.config()

// connect to MongoDB database
connectDB()

// initialize express
const app = express()

// body parser
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.use(notFound)

// this middleware: is a CUSTOM ERROR HANDLER
app.use(errorHandler)

// server port
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
