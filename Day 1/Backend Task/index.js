import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", (await import('./routes/bookRoutes.js')).default);

app.get("/", (req, res) => {
  res.send("Book API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
