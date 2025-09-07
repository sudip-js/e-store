import dotenv from "dotenv";

dotenv.config({});

const _config = {
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

const config = Object.freeze(_config);
export default config;
