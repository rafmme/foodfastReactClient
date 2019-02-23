const mockOrders = [
  {
    orderId: '59b85175-21d0-4af7-bfa8-9dff0f902a98',
    customer: {
      userId: 'be500475-db64-4294-b099-1c1655010452',
      fullname: 'Farayola Timileyin E',
      email: 'farayola@yah.com',
    },
    food: {
      foodId: '31097fb0-d548-48f0-8613-5073d6ebecd7',
      title: 'Jollof rice',
      description: 'Delicious sacred meals for soul healing specially recommended for new users',
      price: 9000,
      imageUrl:
        'https://rafmme.github.io/foodfast/UI/assets/images/cheese-delicious-dinner-2232.jpg',
    },
    quantity: 2,
    totalPrice: 18000,
    phoneNumber: '08012345678',
    deliveryAddress: 'N0 235 Ikorodu, lagos',
    status: 'New',
    createdAt: '2019-02-23T10:46:02.026Z',
    updatedAt: '2019-02-23T10:46:02.026Z',
  },
  {
    orderId: 'c10cd6a8-07f1-4026-a480-139b851cfd80',
    customer: {
      userId: 'd96fd881-2096-46f2-88d8-13c925ebbc87',
      fullname: 'Raf Mme',
      email: 'rafmme@yah.com',
    },
    food: {
      foodId: '31097fb0-d548-48f0-8613-5073d6ebecd7',
      title: 'Jollof rice',
      description: 'Delicious sacred meals for soul healing specially recommended for new users',
      price: 9000,
      imageUrl:
        'https://rafmme.github.io/foodfast/UI/assets/images/cheese-delicious-dinner-2232.jpg',
    },
    quantity: 1,
    totalPrice: 9000,
    phoneNumber: '08012344678',
    deliveryAddress: 'N0 237 Ikorodu, lagos',
    status: 'Processing',
    createdAt: '2019-02-23T10:46:02.026Z',
    updatedAt: '2019-02-23T10:46:02.026Z',
  },
  {
    orderId: '131130dd-51b3-4863-9298-88aee2738028',
    customer: {
      userId: 'e60771b9-ff84-46ba-afa1-8ffbce70212b',
      fullname: 'John Kepler',
      email: 'jkepler@yah.com',
    },
    food: {
      foodId: 'a768b2c5-6cbf-4ee2-a3ab-b3a04529b963',
      title: 'Rice Sausage',
      description: 'Delicious sacred meals for soul healing specially recommended for new users',
      price: 500,
      imageUrl: 'https://rafmme.github.io/foodfast/UI/assets/images/bacon-bread-bun-59943.jpg',
    },
    quantity: 3,
    totalPrice: 1500,
    phoneNumber: '08098765432',
    deliveryAddress: 'Alausa, Ikeja',
    status: 'Cancelled',
    createdAt: '2019-02-23T10:46:02.026Z',
    updatedAt: '2019-02-23T10:46:02.026Z',
  },
  {
    orderId: 'fe5557e1-f22e-4a1e-867b-7ead92e01fbd',
    customer: {
      userId: 'e60771b9-ff84-46ba-afa1-8ffbce70212b',
      fullname: 'John Kepler',
      email: 'jkepler@yah.com',
    },
    food: {
      foodId: '3b23f271-9dfb-4331-996c-c7c732f330e6',
      title: 'Semovita with Egusi soup',
      description: 'Delicious sacred meals for soul healing specially recommended for new users',
      price: 5000,
      imageUrl: 'https://rafmme.github.io/foodfast/UI/assets/images/bacon-bread-bun-59943.jpg',
    },
    quantity: 5,
    totalPrice: 25000,
    phoneNumber: '08098765432',
    deliveryAddress: 'Akowonjo, Egbeda, Lagos',
    status: 'Complete',
    createdAt: '2019-02-23T10:46:02.026Z',
    updatedAt: '2019-02-23T10:46:02.026Z',
  },
];

export default mockOrders;
