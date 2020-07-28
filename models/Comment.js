import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Method 1
  //   video: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Video",
  //   },
});
