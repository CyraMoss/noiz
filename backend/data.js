import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'cyra',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'ami',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'classic design',
      slug: 'classic-design',
      category: 'Hoodie',
      image: '/images/p1.jpg',
      price: 59,
      countInStock: 5,
      brand: 'Noiz',
      rating: 1.5,
      color: 'black',
      numReviews: 10,
      description: 'super comfy hoodie!',
    },
    {
      //_id: '2',
      name: 'new design',
      slug: 'new-design',
      category: 'Hoodie',
      image: '/images/p2.jpg',
      price: 59,
      countInStock: 7,
      brand: 'Noiz',
      rating: 4.5,
      color: 'red',
      numReviews: 17,
      description: 'super comfy new hoodie!',
    },
    {
      //_id: '3',
      name: 'random shit',
      slug: 'random-shit',
      category: 'T-shirt',
      image: '/images/p3.jpg',
      price: 29,
      countInStock: 9,
      brand: 'Noiz',
      rating: 4,
      color: 'blue',
      numReviews: 13,
      description: 'super comfy shirt with random shit on it!',
    },
    {
      //_id: '4',
      name: 'random design',
      slug: 'random-design',
      category: 'scarf',
      image: '/images/p4.jpg',
      price: 40,
      countInStock: 5,
      brand: 'Nike',
      rating: 5,
      color: 'black',
      numReviews: 20,
      description: 'super comfy scarf!',
    },
  ],
};
export default data;
