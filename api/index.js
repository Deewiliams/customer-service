import "dotenv/config";

import app from "../src/app.js";
import connectDB from "../src/config/db.js"

// Connect to MongoDB
await connectDB();

// Export the Express app for Vercel
export default app;
