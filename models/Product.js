import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Product = sequelize.define(
  "product",
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Disable the timestamps for this model
  }
);

export { Product };
