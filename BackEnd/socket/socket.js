import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"], // Allow your frontend URL
    methods: ["GET", "POST"], // Allow specified methods
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// Store user IDs and corresponding socket IDs
const userSocketMap = {};

// Handle new socket connections
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId !== "undefined") {
    userSocketMap[userId] = socket.id;

    console.log("User connected:", socket.id);

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  } else {
    console.log("User ID is undefined or not provided.");
  }

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
    // Remove the disconnected user's socket from the map
    delete userSocketMap[userId];
    // Emit the updated list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
