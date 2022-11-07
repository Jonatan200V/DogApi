const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'temperament',
    {
      temperament_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      temperament_name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          // notNull: true,
          is: /^[a-zA-Z]{1,40}$/,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
