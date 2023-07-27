import { sequelize } from "./config/database.js";
import { inserProduct, fetchProduct } from "./utils/index.js";

try {
  //   await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  inserProduct(
    "demo",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn",
    "demo desc"
  );
  console.log("inserted");
  //   fetchProduct();
  //   console.log("fetched");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
