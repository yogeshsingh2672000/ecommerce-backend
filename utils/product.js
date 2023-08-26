import { Product } from "../models/Product.js";

const inserProduct = async (name, imgURL, desc, category, price) => {
  const newProduct = await Product.create({
    product_name: name,
    product_img: imgURL,
    product_desc: desc,
    category: category,
    price: price,
  });
  console.log(`Product inserted => `, newProduct);
};

const fetchProduct = async (id) => {
  let products;

  if (id) {
    products = await Product.findOne({ where: { id: id } });
  } else {
    products = await Product.findAll({});
  }

  return products;
};

const fetchAllProduct = async (page) => {
  try {
    const products = await Product.findAll({
      limit: 9,
      offset: page * 9,
    });

    return products;
  } catch (err) {
    throw err;
  }
};

const updateProduct = async (id, name, imgURL, desc, category, price) => {
  const newProduct = await Product.update(
    {
      product_name: name,
      product_img: imgURL,
      product_desc: desc,
      category: category,
      price: price,
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

export {
  inserProduct,
  fetchProduct,
  fetchAllProduct,
  updateProduct,
  deleteProduct,
};
