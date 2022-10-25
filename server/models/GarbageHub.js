module.exports = (sequelize, DataTypes) => {
  return sequelize.define("GarbageHub", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    latitude: {
      // type: DataTypes.STRING(1000),
      type: DataTypes.DOUBLE,
    },
    longitude: {
      // type: DataTypes.STRING(1000),
      type: DataTypes.DOUBLE,
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Active', 'Unavailable', 'Removed'
      ],
    },
  }, {timestamps: false});
}
