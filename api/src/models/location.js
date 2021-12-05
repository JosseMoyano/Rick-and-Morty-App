const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('location', {
    id:{
        type: DataTypes.STRING(3),
	    primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dimension: {
        type: DataTypes.STRING,
    },
    residents: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    url: {
        type: DataTypes.STRING,
        isUrl: true,
    },
  },
  {
    timestamps: false
    }
  );
};