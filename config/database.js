import HomePage from "@/app/page";
import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is already connected .....");

    return;
  }

  //   connect to MongoDB

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB Connected ....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
