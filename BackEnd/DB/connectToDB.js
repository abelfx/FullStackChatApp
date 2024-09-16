import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/ChatApp")
    .then((result) => {
      console.log("Connected to DataBase");
    })
    .catch((err) => {
      console.log("Connection Failed", err);
    });
};

export default connectDB;
