export default (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      permanent_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_address: {
        type: DataTypes.STRING,
      },
      user_id: DataTypes.INTEGER,
    },
    {
      tableName: "contacts",
      timestamps: false,
    }
  );

  return Contact; // ✅ Return the model
};
