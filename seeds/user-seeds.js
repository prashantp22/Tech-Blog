const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ron',
    email: 'ron@gmail.com',
    password: 'password'
  },
  {
    username: 'bob',
    email: 'bob@gmail.com',
    password: 'password'
  },
  {
    username: 'linda',
    email: 'linda@gmail.com',
    password: 'password'
  },
  {
    username: 'tina',
    email: 'tina@gmail.com',
    password: 'password'
  },
  {
    username: 'gene',
    email: 'gene@gmail.com',
    password: 'password'
  },
  {
    username: 'teddy',
    email: 'teddy@gmail.com',
    password: 'password'
  },
  {
    username: 'jimmyjr',
    email: 'jimmyjr@gmail.com',
    password: 'password'
  },
  {
    username: 'louise',
    email: 'louise@gmail.com',
    password: 'password'
  },
  {
    username: 'tammy',
    email: 'tammy@gmail.com',
    password: 'password'
  },
  {
    username: 'mort',
    email: 'mort@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
