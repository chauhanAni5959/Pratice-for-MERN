import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB coonected sucessfully!");
  } catch (error) {
    console.log("Error in connecting ", error);
    process.exit(1);
  }
};
export default connectDB;
