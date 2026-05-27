import express from "express";
const app = express();

app.use(express.json());

// Example route triggering an intentional error
app.get("/dashboard", (req, res, next) => {
  const error = new Error("You are not authorized to view this dashboard.");
  error.statusCode = 403;
  next(error); // Passing the error to the global handler
});

// THE GLOBAL ERROR HANDLER (Must have 4 parameters: err, req, res, next)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Hide stack trace in production
  });
});
