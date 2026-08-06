// import "dotenv/config";

// import app from "../src/app.js";
// import connectDB from "../src/config/db.js";

// // Connect to MongoDB
// await connectDB();

// // Export the Express app for Vercel
// export default app;
import "dotenv/config";

import app from "../src/app.js";
import connectDB from "../src/config/db.js";

app.get("/test", (req, res) => {
  res.json({
    message: "Vercel function is working",
  });
});

await connectDB();

export default app;
