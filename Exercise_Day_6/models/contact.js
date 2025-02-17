import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';

const Contact = sequelize.define('Contact',{
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName:'contacts',
    timestamps: false,
  },
);


export default Contact;