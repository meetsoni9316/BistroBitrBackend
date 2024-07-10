import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import reservation from "./Route/Reservation.route.js";
import contactus from "./Route/Contact.route.js";
import userroute from "./Route/User.route.js";
import feedbackroute from "./Route/Feedback.route.js";

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());

const URI = process.env.MongoDBURL;
const PORT = process.env.PORT || 4000;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();

app.use("/bistrobite", reservation);
app.use("/bistrobite", contactus);
app.use("/bistrobite", userroute);
app.use("/bistrobite", feedbackroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`MongoDB URL: ${URI}`);
  console.log(`Server Port: ${PORT}`);
});
