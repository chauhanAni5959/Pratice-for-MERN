import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
