const sequelize = require('../config/connection');
const { frame } = require('../models');

const frameSeedData = require('./frame.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const frames = await frame.bulkCreate(frameSeedData);

  console.log(frames.length)
  process.exit(0);
};

seedDatabase();
