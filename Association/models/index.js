const { Sequelize , DataTypes , Model } = require('sequelize');

const sequelize = new Sequelize('Association', 'postgres', 'Ayush1ashish', {
    host: 'localhost',
    dialect: 'postgres'
  });


  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
  
db.user = require('./user')(sequelize,DataTypes,Model)
db.contact = require('./contact')(sequelize,DataTypes)
db.userContacts = require('./userContact')(sequelize,DataTypes)

// db.user.hasOne(db.contact,{foreignKey : 'user_id'});
// db.user.hasMany(db.contact,{foreignKey : 'user_id'});
// db.contact.belongsTo(db.user);

db.user.belongsToMany(db.contact, { through: db.userContacts });
db.contact.belongsToMany(db.user, { through: db.userContacts });

sequelize.sync({force : false });
module.exports = db;