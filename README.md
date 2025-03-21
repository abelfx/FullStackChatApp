# **Full Stack Chat App**

Welcome to the **Full Stack Chat App** repository! This project is a real-time chat application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to send and receive messages instantly, with features like authentication, real-time messaging, and chat rooms.

---

## **🔹 Project Overview**

The **Full Stack Chat App** is a fully functional real-time messaging application. Built with **React** on the frontend and **Node.js** with **Express** on the backend, the app allows users to join different chat rooms, send messages, and receive real-time updates using **Socket.io**.

---

## **🔹 Features**

- **🗨️ Real-time Messaging**: Send and receive messages instantly in chat rooms.
  
- **🔑 User Authentication**: Secure login and registration using **JWT (JSON Web Tokens)** for session management.
  
- **💬 Chat Rooms**: Users can join different chat rooms and communicate with other members in real time.
  
- **📱 Responsive Design**: A mobile-friendly interface that works seamlessly across different devices and screen sizes.
  
- **🌐 WebSockets**: Real-time communication is enabled through **Socket.io**, providing instant message updates without page reloads.
  
- **🔒 Secure Authentication**: Passwords are securely hashed using **bcrypt.js**, and authentication is handled with **JWT** for secure access.

---

## **🔹 Technologies Used**

- **Frontend**: React.js, HTML, CSS, JavaScript, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt.js
- **Real-time Communication**: Socket.io
- **Routing**: React Router
- **State Management**: Redux (optional)
- **Security**: Helmet.js, bcrypt.js
- **WebSockets**: Socket.io for real-time messaging

---

## **🔹 Installation**

Follow the steps below to run the **Full Stack Chat App** locally:

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/full-stack-chat-app.git
cd full-stack-chat-app
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

cd server
npm start
