const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Posts");
    console.log("Connect to DB");
  } catch (error) {
    console.log("Error in connectDB", error);
  }
}

module.exports = connectDB;
