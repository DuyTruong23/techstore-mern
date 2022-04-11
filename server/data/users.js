import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Minh Hung',
    email: 'minhung@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Gia Phuc',
    email: 'giaphuc@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
