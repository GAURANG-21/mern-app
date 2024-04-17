import { app } from "./app.js";
import envs from "./config/index.js";
import { connectDB } from "./config/database.js";

const start = async () => {
  try {
    await connectDB();
    console.log("Db connected");
    app.listen(envs.PORT, () => {
      console.log(`Server is running on Port : ${envs.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
