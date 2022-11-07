const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'dog',
    {
      dog_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // validate: {
        //   isInt: true,
        // },
      },
      dog_name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
        validate: {
          // notNull: true,
          is: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        },
      },
      dog_height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // notNull: true,
          is: /^[0-9]{1,3}\-[0-9]{1,3}$/,
        },
      },
      dog_weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // notNull: true,
          is: /^[0-9]{1,3}\-[0-9]{1,3}$/,
        },
      },
      dog_lifeSpan: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9]{1,2}\-[0-9]{1,2} years$/,
        },
      },
      dog_image: {
        type: DataTypes.TEXT,
      },
      dog_db: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        // isValidata:{

        // }
      },
    },
    {
      timestamps: false,
    }
  );
};
