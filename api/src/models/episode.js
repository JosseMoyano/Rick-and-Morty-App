const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('episode', {
    id:{
        type: DataTypes.STRING(3),
	    primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    air_date:{
        type: DataTypes.STRING,
    },
    episode: {
        type: DataTypes.STRING,
    },
    characters: {
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