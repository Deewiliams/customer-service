import "dotenv/config";

import app from "../app.js";
import connectDB from "../config/db.js";

// Connect to MongoDB
await connectDB();

// Export the Express app for Vercel
export default app;
