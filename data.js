const bcrypt = require('bcryptjs')

const data = {
  users: [
    {
      name: 'Ricardo',
      email: 'test@test.com',
      password: bcrypt.hashSync('trestres', 8),
      isAdmin: true
    },
    {
      name: 'Jhon',
      email: 'test2@test.com',
      password: bcrypt.hashSync('trestres', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514574/amazon/p1_fpxgy1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      category: 'Shirts',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514574/amazon/p2_d0tmdm.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Adidas',
      rating: 3.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Free Shirt',
      category: 'Shirts',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514574/amazon/p3_ltiwyx.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 3.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514574/amazon/p4_icev9s.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 1.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514573/amazon/p5_vxmwrc.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 5.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: 'https://res.cloudinary.com/dy14mattw/image/upload/v1604514574/amazon/p6_smk630.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};

module.exports = data