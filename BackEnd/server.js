import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import express from "express";

import authlogin from "./routes/authRoutes.js";
import messages from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./DB/connectToDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieparser());
app.use(express.json());

app.use("/api/auth", authlogin);
app.use("/api/messages", messages);
app.use("/users", userRoutes);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`listening on port ${PORT}`);
});
