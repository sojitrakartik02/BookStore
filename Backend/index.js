import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
const app = express();
app.use(cors());
app.use(express.json())



dotenv.config();
const PORT = process.env.PORT || 3800;
const URI = process.env.MongoDBURL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
