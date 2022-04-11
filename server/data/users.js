import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Duy Truong',
    email: 'duycute@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Truong Duy',
    email: 'duydeptrai@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
