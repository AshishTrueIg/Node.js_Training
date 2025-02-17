import { Sequelize, DataTypes } from 'sequelize';

// Database connection
const sequelize = new Sequelize('Temp', 'postgres', 'Ayush1ashish', {
  host: 'localhost',
  dialect: 'postgres',
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Initialize database object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models properly
const contactModule = import('./contact.js');  // Use `.js`
const userModule = import('./user.js');

db.user = userModule.default;
db.contact = contactModule.default;  // Assign default export

// db.user.hasOne(db.contact);
// db.contact.belongsTo(db.user);

// Sync database
db.sequelize.sync({ alter : true}) // Use `alter: true` instead of `force: false`
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.error('Sync failed:', err));

export default db;
