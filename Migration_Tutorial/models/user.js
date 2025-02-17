// import { DataTypes } from 'sequelize';
// import sequelize from './index.js';

// const User = sequelize.define('User',
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//     tableName:'users',
//     timestamps: false
//   },
// );

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// export default User;


// module.exports = (sequelize,DataTypes,Model)=>{
//   class User extends Model {}

//   User.init(
//     {
//       // Model attributes are defined here
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         defaultValue:"Singh"
//         // allowNull defaults to true
//       },
//     },
//     {
//       // Other model options go here
//       sequelize, // We need to pass the connection instance
//       modelName: 'User', // We need to choose the model name
//     },
//   );

//   // the defined model is the class itself
//   // console.log(User === sequelize.models.User); 

//   return User;
// }

import { DataTypes, Model } from "sequelize";
import db from './index.js'; // ✅ Import Sequelize instance

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "Singh",
    },
  },
  {
    sequelize : db.sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
