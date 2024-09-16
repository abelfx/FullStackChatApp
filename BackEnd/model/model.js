import mongoose from "mongoose";
import { deflate } from "zlib";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },

    profilepic: {
      type: String,
      default: "",
    },
  },
  // Member from <createdAt>
  { timestamps: true }
);

const model = mongoose.model("Users", userSchema);

export default model;
