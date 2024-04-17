import { configDotenv } from "dotenv";
configDotenv({ path: "./config/config.env" });

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};
