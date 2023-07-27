import { Product } from "../models/Product.js";

const inserProduct = async (name, imgURL, desc) => {
  const newProduct = await Product.create({
    product_name: name,
    product_img: imgURL,
    product_desc: desc,
  });
  console.log(`Product inserted => `, newProduct);
};

const fetchProduct = async () => {
  const products = await Product.findAll({
    attributes: ["product_name", "product_img", "product_desc"],
  });
  console.log(products);
};

const updateProduct = async (id, name, imgURL, desc) => {
  const newProduct = await Product.update(
    {
      product_name: name,
      product_img: imgURL,
      product_desc: desc,
    },
    {
      where: {
        id: id,
      },
    }
  );
  console.log(`Product id:${id} updated => `, newProduct);
};

const deleteProduct = async (id) => {
  const product = await Product.destroy({
    where: {
      id: id,
    },
  });
  console.log(`Product id:${id} deleted => `, product);
};

export { inserProduct, fetchProduct, updateProduct, deleteProduct };
