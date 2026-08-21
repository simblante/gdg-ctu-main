import dotenv from "dotenv";
dotenv.config();

const ENV = {
      PORT: process.env.PORT,
      NODE_ENV: process.env.NODE_ENV,
      DB_URL: process.env.DB_URL,
      FR_ORIGIN: process.env.FR_ORIGIN,
      PASSWORD_LENGTH: process.env.PASSWORD_LENGTH,
      CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
};

export default ENV;
