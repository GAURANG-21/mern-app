import { app } from "./app.js";
import { configDotenv } from "dotenv";

configDotenv({ path: "./config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port : ${process.env.PORT}`);
});
