import mongoose from "mongoose";
import config from "../config/env.config.js";
import { CONSTANT } from "../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${config.DATABASE_URI}`, {
      dbName: CONSTANT.DB_NAME,
    });
    console.log("🚀 Database connected successfully");
  } catch (error) {
    console.error("Failed to connect database!", error);
    throw new Error(error);
  }
};

export default connectDB;
