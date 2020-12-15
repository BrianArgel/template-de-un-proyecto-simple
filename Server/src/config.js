import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/pointeri",
  PORT: process.env.PORT || 4000,
  SECRET: 'pointeriSecretUltraf3j0h0q3',
  URL: "http://localhost:4000/"
};
