const { sequelize } = require('./models'); 

async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); 
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

syncDatabase();
