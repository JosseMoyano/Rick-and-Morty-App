const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('character', {
    id:{
        type: DataTypes.STRING(3),
	    primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
    },
    locationName: {
        type: DataTypes.STRING
    },
    locationUrl: {
        type: DataTypes.STRING,
        isUrl: true,
    },
    image : {
        type: DataTypes.TEXT,
        isUrl: true,
        allowNull: false
    },
    url : {
        type: DataTypes.TEXT,
        isUrl: true,
    }
  },
  {
    timestamps: false
    }
  );
};