import { sequelize } from "./config/database.js";
import {
  inserProduct,
  fetchProduct,
  updateProduct,
  deleteProduct,
} from "./utils/product.js";

try {
  deleteProduct(1005);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
