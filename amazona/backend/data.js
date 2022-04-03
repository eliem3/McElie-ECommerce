import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'McElie',
      email: 'admin@whatcomefirst.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jason',
      email: 'user@whatcomefirst.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Ross308',
      slug: 'Ross397',
      category: 'Ross',
      image: '/img/image-0.jpeg', // 679 x 829
      currency: 'R',
      tag: 'DayOldChick',
      price: 20,
      discount: 5,
      currentPrice: 15,
      countInStock: 10,
      brand: 'Ross308',
      rating: 4.5,
      numReviews: 13,
      description: 'Ross308 Day Old Chicks and more information',
    },
    {
      // _id: '2',
      name: 'Ross308 Day',
      slug: 'Ross308',
      category: 'Ross',
      image: '/img/image-4.jpeg',
      currency: 'R',
      tag: 'DayOldChick',
      price: 900,
      discount: 200,
      currentPrice: 700,
      countInStock: 30,
      brand: 'Ross308',
      rating: 4.3,
      numReviews: 3,
      description:
        'Basic Care for Day Old Chicks: Keep brooder temps at 95 F for the first week',
    },
    {
      // _id: '3',
      name: 'Ross308 Chick',
      slug: 'Ross311',
      category: 'Ross',
      image: '/img/Image-2.jpeg',
      currency: 'R',
      tag: 'DayOldChick',
      price: 1200,
      discount: 300,
      currentPrice: 1500,
      countInStock: 21,
      brand: 'Ross308',
      rating: 4.7,
      numReviews: 22,
      description:
        'Order day old broilers here. Order minimum of 100 in a box, shipped to you. Grow your own healthy Ross 308 chickens',
    },
    {
      // _id: '4',
      name: 'Ross1414 Marber Chick',
      slug: 'Ross1414',
      category: 'Ross',
      image: '/img/Image-3.jpeg',
      currency: 'R',
      tag: 'Ross1414Chick',
      price: 1200,
      discount: 300,
      currentPrice: 900,
      countInStock: 0,
      brand: 'Ross1414',
      rating: 4.8,
      numReviews: 8,
      description:
        'Red Chicks Day old chicks: R6.50 per chick (box of 100 chicks)5 week old chickens: R22.006',
    },
  ],
};

export default data;
