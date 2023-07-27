import { Product } from "../models/Product.js";

const inserProduct = async (name, imgURL, desc) => {
  const newProduct = await Product.create({
    product_name: name,
    product_img: imgURL,
    product_desc: desc,
  });
  console.log("New product inserted:", newProduct.toJSON());
};

const fetchProduct = async () => {
  const products = await Product.findAll({
    attributes: ["product_name", "product_img", "product_desc"],
  });
  console.log(products);
};

export { inserProduct, fetchProduct };
