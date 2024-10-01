import 'dotenv/config'
import express from "express";

import { app,server } from './socket/socket.js';

import cors from "cors";
import connectDb from "./db/db_connect.js";

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import messageRoutes from "./routes/message.route.js"
import activityRoutes from "./routes/activity.route.js"


// const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/activities",activityRoutes);

app.get("/",(req,res)=>{
  res.json({message: "Hello world"});
})

server.listen(PORT,()=>{
  connectDb();
  console.log(`Server is running on port ${PORT}`);
})