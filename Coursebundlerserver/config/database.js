import mongoose from "mongoose";
import envs from "./index.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(envs.MONGO_URI, {
      dbName: "CourseBundler",
    });
  } catch (error) {
    console.log(error);
  }
};
