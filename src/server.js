import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 8000;
// console.log("API KEY:", process.env.OPENAI_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
