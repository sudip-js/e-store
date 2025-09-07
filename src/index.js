import app from "./app.js";
import config from "./config/env.config.js";
import connectDB from "./db/connectDB.js";

const startServer = async () => {
  try {
    await connectDB();

    const port = config.PORT || 8000;
    app.listen(port, () => {
      console.log(`🚀 Server is running at port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to load server", error);
    process.exit(1);
  }
};

startServer();
