import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// Pagination
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// Get a product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
<<<<<<< HEAD
    res.status(404)
    throw new Error('Không tìm thấy sản phẩm')
=======
    res.status(404);
    throw new Error('Product not found');
>>>>>>> feature/Duy2
  }
});

// Create a product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
<<<<<<< HEAD
    await product.remove()
    res.json({ message: 'Xoá sản phẩm' })
  } else {
    res.status(404)
    throw new Error('Không tìm thấy sản phẩm')
=======
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
>>>>>>> feature/Duy2
  }
});

// Create a product
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
<<<<<<< HEAD
    name: 'Tên sản phẩm',
    price: 0,
    user: req.user._id,
    image: 'ánh.png',
    brand: 'Thương hiệu',
    category: 'Danh mục sản phẩm',
    countInStock: 0,
    numReviews: 0,
    description: 'Mô tả',
  })
=======
    name: 'Iphone 6',
    price: 0,
    user: req.user._id,
    brand: 'Samsung',
    category: 'Smart Phone',
    countInStock: 0,
    numReviews: 0,
    description: 'Điện thoại tàu',
  });
>>>>>>> feature/Duy2

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update a product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
<<<<<<< HEAD
    product.name = name
    product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock
=======
    product.name = name;
    product.price = price;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
>>>>>>> feature/Duy2

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
