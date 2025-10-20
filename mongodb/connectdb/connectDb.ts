import { dbconfig } from "@/mongodb/config/dbconfig";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

 const connectDB = async () => {
  try {
    // if (mongoose.connection.readyState >= 1) return
    if (mongoose.connections[0].readyState || mongoose.connection.readyState >= 1) return
    //Connect to MongoDB
    await mongoose
      .connect(dbconfig.mongo.url, { retryWrites: true, w: "majority" })
      .then(() => {
        console.log("Connected to MongoDB database!");
      })
      .catch((error) => {
        console.log("Error connecting to MongoDB: ", error);
      });
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
  return new NextResponse( "Connected to MongoDB database!")
};

export default connectDB;