const { Post } = require('../models');

const postdata = [
  {
    title: 'apple stock goes up',
    post_content: 'i-phone 27 is just been released',
    user_id: 10
  },
  {
    title: 'microsoft buys yahoo',
    post_content: 'microsoft purchases yahoo for 800 million',
    user_id: 8
  },
  {
    title: 'LG releases first transparent monitor',
    post_content: 'LG creates a transparent glass monitor',
    user_id: 1
  },
  {
    title: 'manditory coding classes',
    post_content: 'Coding class is requirment for all students in public school',
    user_id: 4
  },
  {
    title: 'amazon buys google',
    post_content: 'The world has ended',
    user_id: 7
  },
  {
    title: 'first halo cellphone is invented',
    post_content: 'Tony Stark creates the first halo cellphone',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;