// import dotenv from "dotenv"; 
import mongoose from "mongoose";

// dotenv.config();

const MONGODB_USERNAME: string = process.env.MONGO_USERNAME || "";
const MONGODB_PASSWORD: string = process.env.MONGO_PASSWORD || "";

const MONGODB_URL = process.env.NODE_ENV === "development"
    ? `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@circl-landing-page.cc4bimn.mongodb.net/TestWaitlist`
    : `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@circl-landing-page.cc4bimn.mongodb.net/Waitlist`;


const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3001;

export const dbconfig = {
  mongo: {
    url: MONGODB_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};

//Connect to MongoDB
mongoose
  .connect(dbconfig.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("Connected to MongoDB database!");
  })
  .catch((error: string) => {
    console.log("Error connecting to MongoDB: ", error);
  });