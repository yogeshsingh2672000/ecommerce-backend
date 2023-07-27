// import { sequelize } from "./config/database.js";
// import {
//   inserProduct,
//   fetchProduct,
//   updateProduct,
//   deleteProduct,
// } from "./utils/product.js";

// try {
//   deleteProduct(1004);
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Set up middleware (optional)
// Middleware functions are used to modify incoming requests or outgoing responses.
// For example, you can use middleware to parse JSON data, log requests, handle authentication, etc.

// Middleware to parse JSON data
app.use(express.json());

// Middleware to handle URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Define your API routes
// You can create separate route files and import them here for better organization.

// Example route: GET request to the root endpoint
app.get("/hi", (req, res) => {
  res.send("Hello, this is the root endpoint!");
});

// Example route: POST request to '/api/data'
app.use("/api/product", productRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
